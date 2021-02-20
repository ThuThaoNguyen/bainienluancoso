import { Component, OnInit, Input } from '@angular/core';
import {AngularFireDatabase, AngularFireObject} from "angularfire2/database";
import {Observable} from "rxjs";
import {AngularFireList} from '@angular/fire/database';
import {baitap} from '../app-baitap';
import { baitapService } from '../app-baitap.service';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-app-video',
  templateUrl: './app-video.component.html',
  styleUrls: ['./app-video.component.css']
})
export class AppVideoComponent implements OnInit {
  baitap2:any;
  count:number=0;
   cong:number=+99999;
   clickthich(cong:any){
     if(this.cong==+99999)
      { this.cong=this.count+1; }
    else this.cong+=1;
   }
  constructor(private baitapservice:baitapService ) { }
  ngOnInit() {this.getbaitaplist();}
  getbaitaplist(){
    this.baitapservice.getbaitapList().snapshotChanges().pipe(map(changes=>changes.map(c=>({key:c.payload.key, ...c.payload.val()})))).subscribe(tailieu=>{this.baitap2=tailieu});
  }
  }
 
