import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from  '@angular/common/http';
import { Observable } from 'rxjs';
import { ConstantPool } from '@angular/compiler';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor( private http: HttpClient) { }
  
  //getToken(userName, password):Observable<any> {
    getToken():Observable<any> {
      var data;
      var reqHeader = new HttpHeaders({ 'No-Auth':'True', "Authorization": "Basic "});
      
      return this.http.get('http://localhost:3000' + '/token?'+ data, { headers: reqHeader }).pipe(map(
      res => {
        return res;
      },
      err => {
        return err;
      }
    ))
  }

}