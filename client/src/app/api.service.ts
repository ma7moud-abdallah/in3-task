import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
   url = 'http://localhost:3000'
   
  constructor( private http : HttpClient) { }
  getAllProducts (query) {
    const params = new HttpParams().set('query',JSON.stringify(query));
    return this.http.get(`${this.url}/products`,{params}).toPromise()
  }
  getAllCategories () {
    return this.http.get(`${this.url}/categories`).toPromise()
  }
}
