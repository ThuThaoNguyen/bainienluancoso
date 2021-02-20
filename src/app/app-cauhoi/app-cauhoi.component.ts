import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";
import {Observable} from "rxjs";
@Component({
  selector: 'app-cauhoi',
  templateUrl: './app-cauhoi.component.html',
  styleUrls: ['./app-cauhoi.component.css']
})
export class AppCauhoiComponent implements OnInit {
  sinhvienObservable: Observable<any[]>;
  constructor(public db: AngularFireDatabase) { 
    
  }

  ngOnInit() {
    this.sinhvienObservable= this.getsinhvien('/sinhvien');
  }
  getsinhvien(listPath):Observable<any[]>{
    return this.db.list(listPath).valueChanges();
  }
}
