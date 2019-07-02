import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import { FormsModule } from '@angular/forms';
import { HttpClient,HttpClientModule } from '@angular/common/http';


describe('AppComponent', () => {
  let component: AppComponent
  let api:ApiService 
  let http:HttpClient
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers:[ApiService],
      imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        HttpClientTestingModule,
      ],
      
    }).compileComponents();
    component = new AppComponent(new ApiService(http))
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'in3'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('in3');
  });
  describe('getPageNumber', () => {
    it(`should return null if query.page+1 == count and pagenumber > 0`, () => {
      component.query = {page:0}
      component.count = 1
      const result =  component.getPageNumber(1) 
      expect(result).toBeNull()
    });
    it(`should return null if query.page+1 == 0 and pagenumber < 0`, () => {
      component.query = {page:0}
      const result =  component.getPageNumber(-1) 
      expect(result).toBeNull()
    });
    it(`should return decrease query.page if query.page+1 !== 0 and pagenumber < 0`, () => {
      component.query = {page:1}
      component.getPcs = () => true
      component.getPageNumber(-1) 
      expect(component.query.page).toBe(0)
    });
    it(`should return inecrease query.page if query.page+1 !== count and pagenumber < 0`, () => {
      component.query = {page:0}
      component.count = 2
      component.getPcs = () => true
      component.getPageNumber(1) 
      expect(component.query.page).toBe(1)
    });
  });
  describe('clear fiters function', () => {
    it('should clear query object ',() => {
      component.query = {page: 1,CPU : "Core i 3",RAM:"3GB"}
      component.getPcs = () => true
      component.cleatFilters()
      expect(component.query).toEqual({})
    })
    
  })
  
});
