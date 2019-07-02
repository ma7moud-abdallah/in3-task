import { Component, OnInit } from '@angular/core';
import   { ApiService } from './api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  products
  categories$
  query:any = {page:0}
  count
  constructor(private api:ApiService){
    
  }
  title = 'in3';

   ngOnInit(){
    this.categories$ = this.api.getAllCategories() 
    this.getPcs()
  }
  setvalue(key,value){
    this.query[key] = value
  }

  getPcs(routing=false){
    if(!routing) this.query.page = 0
     this.api.getAllProducts(this.query)
     .then((res:any) => {
       this.products = res.Products
       this.count = Math.ceil(res.count/10)
      })
     .catch(err => console.log(err))   
  }
  getPageNumber(pageNumber){
    console.log({query :this.query,count :this.count})
    if(pageNumber > 0 && this.query.page + 1 == this.count) return null
    if(pageNumber < 0 && this.query.page == 0) return null
    this.query.page += pageNumber
    this.getPcs(true)
  }

  cleatFilters() {
    this.query = {};
    this.getPcs()
  }
}
