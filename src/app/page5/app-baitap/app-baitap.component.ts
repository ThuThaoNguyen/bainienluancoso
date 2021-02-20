import { Component, OnInit, Input } from '@angular/core';
import {AngularFireDatabase, AngularFireObject} from "angularfire2/database";
import {Observable} from "rxjs";
import {AngularFireList} from '@angular/fire/database';
import {baitap} from '../app-baitap';
import { baitapService } from '../app-baitap.service';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-app-baitap',
  templateUrl: './app-baitap.component.html',
  styleUrls: ['./app-baitap.component.css']
})
export class AppBaitapComponent implements OnInit {
 
 
  
  baitap2:any;
  
  constructor(private baitapservice:baitapService ) {
  }

  ngOnInit() {this.getbaitaplist();}
 getbaitaplist(){
   this.baitapservice.getbaitapList().snapshotChanges().pipe(map(changes=>changes.map(c=>({key:c.payload.key, ...c.payload.val()})))).subscribe(tailieu=>{this.baitap2=tailieu});}
 }

