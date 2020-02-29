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

  constructor(private _http: HttpService) { }

  ngOnInit(): void {
    this._http.addPost().subscribe((data: any) => {

    })
  }
}