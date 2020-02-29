import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  token: Object;

  constructor(private _http:HttpService) { }

  ngOnInit(): void {

    var username; // I am not sure if this should be initialized globaly
    username = "Beto";
    this._http.getToken(username).subscribe((data: any) => {
      
      this.token = data;
      console.log('token retrieved successfuly ' + data.accessToken);
      localStorage.setItem('userToken', data.accessToken);
    })

  }

}
