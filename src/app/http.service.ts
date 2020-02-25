import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from  '@angular/common/http';
import { Observable } from 'rxjs';
import { ConstantPool } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor( private http: HttpClient) { }

 /* getBeer(){
    //return this.http.get('https://api.openbrewerydb.org/breweries')
    return this.http.get('assets/hello.txt', { responseType: 'text'});
  } */

  
  /*getBeer(): Observable<Object>{
// getting headers
 
    const headers = new HttpHeaders({
      'Name': 'Me'
    })
    const params = new HttpParams().append('age', '100')
    return this.http.get('https://api.openbrewerydb.org/breweries', { headers: headers, params: params })
    
  } */

  getBeer(): Observable<Object>{
    //return this.http.get<Object>('https://api.openbrewerydb.org/breweries');
    //return this.http.get<Object>('http://localhost:3000/posts');
    return this.http.get<Object>('http://localhost:3000/token');
  } 

  getToken(){

    //return localStorage.getItem('accessToken')

  }

  setSession(): Observable<Object>{
    //return this.http.get<Object>('http://localhost:3000/token').
    //this.setSession('http://localhost:3000/token');

    console.log('value of console ' + this.http.get<Object>('http://localhost:3000/token'))
    //return this.http.get<Object>('http://localhost:3000/token');

    return this.http.get<Object>('http://localhost:3000/token');


  }
}