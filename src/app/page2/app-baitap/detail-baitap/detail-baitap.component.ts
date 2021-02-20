
import {baitap} from '../../app-baitap';
import { baitapService } from '../../app-baitap.service';
import {map} from 'rxjs/operators';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-detail-baitap',
  templateUrl: './detail-baitap.component.html',
  styleUrls: ['./detail-baitap.component.css']
})
export class DetailBaitapComponent implements OnInit {
  @Input() baitap:baitap;
  count:number;
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
