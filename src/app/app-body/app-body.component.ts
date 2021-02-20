import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-body',
  templateUrl: './app-body.component.html',
  styleUrls: ['./app-body.component.css']
})
export class AppBodyComponent implements OnInit {
  home:boolean=false;
  convert() {
    this.home=true;
  }
  constructor() { }

  ngOnInit() {
  }

}
