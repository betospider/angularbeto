import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  brews: Object;
  token: Object;
  
  constructor(private _http:HttpService) { }
  
  ngOnInit(): void {
    
    //this.userAuthentication(userName, password).subscribe((data: any) => {
      var username; // I am not sure if this should be initialized globaly
      username = "Beto";
      this._http.getToken(username).subscribe((data: any) => {
        this.token = data;
        console.log(this.token);
        localStorage.setItem('userToken', data.accessToken);
      })

      this._http.addPost().subscribe((data: any) => {
        
      })
    }
}