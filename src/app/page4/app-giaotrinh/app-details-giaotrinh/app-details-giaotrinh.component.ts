import {baitap} from '../../app-baitap';
import { baitapService } from '../../app-baitap.service';
import {map} from 'rxjs/operators';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-app-details-giaotrinh',
  templateUrl: './app-details-giaotrinh.component.html',
  styleUrls: ['./app-details-giaotrinh.component.css']
})
export class AppDetailsGiaotrinhComponent implements OnInit {
  count:number;
  @Input() baitap:baitap;
  constructor(private baitapservice:baitapService ) { }

  ngOnInit() {
  }
  updatelike() {
    this.count=this.baitap.Luotthich+1;
    this.baitapservice
      .updatebaitap(this.baitap.key, { Luotthich:this.count})
      .catch(err => console.log(err));
  }
}
