import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private url="https://restcountries.eu";
  public navbarOpen:boolean=true;

  constructor(private http:HttpClient) { }

  public getCountriesFromRegion(name):Observable<any>{
     return this.http.get(`${this.url}/rest/v2/region/${name}`);
  }
  public getCountriesFromCurrency(code):Observable<any>{
    return this.http.get(`${this.url}/rest/v2/currency/${code}`);
  }
  public getCountriesFromLanguage(code):Observable<any>{
    return this.http.get(`${this.url}/rest/v2/lang/${code}`);
  }

  public setCountryInLocalStorage=(country)=>{
    localStorage.setItem(country.name,JSON.stringify(country));
  }
  public getCountryFromLocalStroage=(name)=>{
    return JSON.parse(localStorage.getItem(name));
  }
  public clearLocalStorage(){
    localStorage.clear();
  }

  public getRegions():any{
    return [
      {regionName:'asia',regionImageUrl:'assets/regions/Asia.png',shortInfo:'Spanning the eastern, southern and notheren hemispheres, it covers an area of 44,579,000 sq. km (17,212,000 sq mi) and has a population of 446.27 crores.'},
      {regionName:'americas',regionImageUrl:'assets/regions/America.png',shortInfo:'Spanning the western, southern and notheren hemispheres, it covers an area of 42,549,000 sq. km (16,428,000 sq mi) and has a population of 32.57 crores.'},
      {regionName:'africa',regionImageUrl:'assets/regions/Africa.png',shortInfo:'Spanning the eastern, southern and notheren hemispheres, it covers an area of 30,370,000 sq. km (11,730,000 sq mi) and has a population of 121.61 crores.'},
      {regionName:'europe',regionImageUrl:'assets/regions/Europe.png',shortInfo:'Spanning the eastern and notheren hemispheres, it covers an area of 10,180,000 sq. km (3,930,000 sq mi) and has a population of 74.14 crores.'},
      {regionName:'oceania',regionImageUrl:'assets/regions/Oceania.png',shortInfo:'Spanning the eastern and western hemispheres, it covers an area of 8,525,989 sq. km (3,291,903 sq mi) and has a population of 38.82 million.'}
    ];
  }

  public getNavbarState():boolean{
    return this.navbarOpen;
  }
  public setNavbarState(state:boolean){
    this.navbarOpen=state;
  }
}
