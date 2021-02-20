import { Component, OnInit, Input } from '@angular/core';
import { De } from '../de';
import { KtraService } from '../ktra.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-de-details',
  templateUrl: './de-details.component.html',
  styleUrls: ['./de-details.component.css']
})
export class DeDetailsComponent implements OnInit {

  @Input() csdldes: De;
  de:any;
  type:number;
  constructor(private ktservice: KtraService,private router: Router ) { }

  ngOnInit() {
  }

  // gotoEXAPLE(type: any) {
  //   this.router.navigate(['/bode/', type]);
  // }


}
