import { Component, OnInit } from '@angular/core';
import { AppCauhoiService } from './app-cauhoi.service';
import { map } from 'rxjs/operators';
import{AppKiemtraService} from './app-kiemtra.service';
@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  page:boolean=false;
  value:boolean=false;
  cauhoi:any;
  kiemtra:any;
  clickvideo(){
    this.page=true;
  }
  clickbaitap(){
    this.page=true;
  }
  clickgiaotrinh(){
    this.page=true;
  }
  page2=false;
  clickphan2(){
    this.page2=true;
    this.page=true;
    this.page3=false;
    this.page4=false;
    this.page5=false;
    this.page6=false;
  }
  page3=false;
  clickphan3(){
    this.page3=true;
    this.page=true;
    this.page2=false;
    this.page4=false;
    this.page5=false;
    this.page6=false;
  }
  page4=false;
  clickphan4(){
    this.page4=true;
    this.page=true;
    this.page2=false;
    this.page3=false;
    this.page5=false;
    this.page6=false;
  }
  page5=false;
  clickphan5(){
    this.page5=true;
    this.page=true;
    this.page2=false;
    this.page3=false;
    this.page4=false;
    this.page6=false;
  }
  page6=false;
  clickphan6(){
    this.page6=true;
    this.page=true;
    this.page2=false;
    this.page3=false;
    this.page4=false;
    this.page5=false;
  }
  clickback(){
    this.page=false;
  }
  setClick(){
    this.value=true;
  }
  removeClick(){
    this.value=false;
  }
  dapan=false;
  xemdapan(){
    this.dapan=true;
  }
  constructor(private CauhoiService: AppCauhoiService,private kiemtraService: AppKiemtraService) { }
  ngOnInit() {this.getcauhoiList();
           this.getkiemtraList();
  }
 
  getcauhoiList() {
    this.CauhoiService.getcauhoiList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(cauhoi => {
      this.cauhoi = cauhoi;
      
    });
  }
  getkiemtraList() {
    this.kiemtraService.getkiemtraList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(kiemtra => {
      this.kiemtra = kiemtra;
      
    });
  }


}
