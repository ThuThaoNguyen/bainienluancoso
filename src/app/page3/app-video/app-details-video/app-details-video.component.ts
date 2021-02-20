import {baitap} from '../../app-baitap';
import { baitapService } from '../../app-baitap.service';
import {map} from 'rxjs/operators';
import { Component, OnInit, Input } from '@angular/core';
import { Key } from 'protractor';

import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-app-details-video',
  templateUrl: './app-details-video.component.html',
  styleUrls: ['./app-details-video.component.css']
})
export class AppDetailsVideoComponent implements OnInit {

   count:number;
  @Input() baitap:baitap;
  constructor(private baitapservice:baitapService ) {}

  ngOnInit() {
  }
 
  updatelike() {
    this.count=this.baitap.Luotthich+1;
    this.baitapservice
      .updatebaitap(this.baitap.key, { Luotthich:this.count})
      .catch(err => console.log(err));
  }
 
}
