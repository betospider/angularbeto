import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler):
  Observable<HttpEvent<any>> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiS3lsZSIsImlhdCI6MTU4MjE2Mzc3M30.JGwYkCU1O_E2H5AddHntio06yzIq-_Z95zHJu5glzkM '
    });
  
    const clone = req.clone({
      headers: headers
    }); 
    
    //return next.handle(req);
    return next.handle(clone);
  } 

 
}
