import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  brews: Object;
  // Let use Http-Interceptor service instead
  constructor(private _http:HttpService) { }
  //constructor(private _http: HttpInterceptorService) { }

  ngOnInit(): void {
    this._http.getBeer().subscribe(data => {
      this.brews = data;
      console.log(this.brews);

    });

    this._http.setSession().subscribe(data => {
      this.brews = data;
      console.log(this.brews);

    });

  }

}
