import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from  '@angular/common/http';
import { Observable } from 'rxjs';
import { ConstantPool } from '@angular/compiler';
import { map } from 'rxjs/operators';
//import { RSA_NO_PADDING } from 'constants';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor( private http: HttpClient) { }
  
  //getToken(userName, password):Observable<any> {
    getToken(username):Observable<any> {
      var data;
      data = 'username='+ username;

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

  addPost():Observable<any> {
    var data;
    var reqHeader = new HttpHeaders({ 'No Auth':'True', 'Authorization': 'Basic'});

    return this.http.get('http://localhost:3000' + '/addPost1?' + data, { headers: reqHeader}).pipe(map(
      res => {
        return res;
      },

      err => {
        return err;

      }
    ))

  }

}