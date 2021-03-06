import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})

export class HttpInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler):
  Observable<HttpEvent<any>> {
    
  
    let bearerToken : string = localStorage.getItem('userToken');
   
    console.log('bearer token is:' + bearerToken);
    const headers = new HttpHeaders({
      //Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQmV0byIsImlhdCI6MTU4MjMzNDk3MX0.QNSiXJvFNDvv3pcuAR7xb-hvkQ8tP2vc1SvfJNgzx40'
      Authorization: 'Bearer ' +  bearerToken
    });
  
    const clone = req.clone({
      headers: headers
    }); 

   
    
    //return next.handle(req);
    return next.handle(clone);
  } 


 
} 
