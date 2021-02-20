import { Component, OnInit } from '@angular/core';
import { AppCauhoiService } from './app-cauhoi.service';
import { map } from 'rxjs/operators';
import { AppKiemtraService } from './app-kiemtra.service';
@Component({
  selector: 'app-page5',
  templateUrl: './page5.component.html',
  styleUrls: ['./page5.component.css']
})
export class Page5Component implements OnInit {

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
    this.page7=false;
    this.page8=false;
    this.page9=false;
    this.page10=false;
    this.page11=false;
    this.page12=false;
    this.page13=false;
    this.page14=false;
  }
  page3=false;
  clickphan3(){
    this.page3=true;
    this.page=true;
    this.page2=false;
    this.page4=false;
    this.page5=false;
    this.page6=false;
    this.page7=false;
    this.page8=false;
    this.page9=false;
    this.page10=false;
    this.page11=false;
    this.page12=false;
    this.page13=false;
    this.page14=false;
  }
  page4=false;
  clickphan4(){
    this.page4=true;
    this.page=true;
    this.page2=false;
    this.page3=false;
    this.page5=false;
    this.page6=false;
    this.page7=false;
    this.page8=false;
    this.page9=false;
    this.page10=false;
    this.page11=false;
    this.page12=false;
    this.page13=false;
    this.page14=false;
  }
  page5=false;
  clickphan5(){
    this.page5=true;
    this.page=true;
    this.page2=false;
    this.page3=false;
    this.page4=false;
    this.page6=false;
    this.page7=false;
    this.page8=false;
    this.page9=false;
    this.page10=false;
    this.page11=false;
    this.page12=false;
    this.page13=false;
    this.page14=false;
  }
  page6=false;
  clickphan6(){
    this.page6=true;
    this.page=true;
    this.page2=false;
    this.page3=false;
    this.page4=false;
    this.page5=false; 
    this.page7=false;
    this.page8=false;
    this.page9=false;
    this.page10=false;
    this.page11=false;
    this.page12=false;
    this.page13=false;
    this.page14=false;
  }
  page7=false;
  clickphan7(){
    this.page6=false;
    this.page=true;
    this.page2=false;
    this.page3=false;
    this.page4=false;
    this.page5=false; 
    this.page7=true;
    this.page8=false;
    this.page9=false;
    this.page10=false;
    this.page11=false;
    this.page12=false;
    this.page13=false;
    this.page14=false;

    }
  
  page8=false;
  clickphan8(){
    this.page6=false;
    this.page=true;
    this.page2=false;
    this.page3=false;
    this.page4=false;
    this.page5=false; 
    this.page7=false;
    this.page8=true;
    this.page9=false;
    this.page10=false;
    this.page11=false;
    this.page12=false;
    this.page13=false;
    this.page14=false;
  }
  page9=false;
  clickphan9(){
    this.page6=false;
    this.page=true;
    this.page2=false;
    this.page3=false;
    this.page4=false;
    this.page5=false; 
    this.page7=false;
    this.page8=false;
    this.page9=true;
    this.page10=false;
    this.page11=false;
    this.page12=false;
    this.page13=false;
    this.page14=false;
  }
  page10=false;
  clickphan10(){
    this.page6=false;
    this.page=true;
    this.page2=false;
    this.page3=false;
    this.page4=false;
    this.page5=false; 
    this.page7=false;
    this.page8=false;
    this.page9=false;
    this.page10=true;
    this.page11=false;
    this.page12=false;
    this.page13=false;
    this.page14=false;
  }
  page11=false;
  clickphan11(){
    this.page6=false;
    this.page=true;
    this.page2=false;
    this.page3=false;
    this.page4=false;
    this.page5=false; 
    this.page7=false;
    this.page8=false;
    this.page9=false;
    this.page10=false;
    this.page11=true;
    this.page12=false;
    this.page13=false;
    this.page14=false;
  }
  page12=false;
  clickphan12(){
    this.page6=false;
    this.page=true;
    this.page2=false;
    this.page3=false;
    this.page4=false;
    this.page5=false; 
    this.page7=false;
    this.page8=false;
    this.page9=false;
    this.page10=false;
    this.page11=false;
    this.page12=true;
    this.page13=false;
    this.page14=false;
  }
  page13=false;
  clickphan13(){
    this.page6=false;
    this.page=true;
    this.page2=false;
    this.page3=false;
    this.page4=false;
    this.page5=false; 
    this.page7=false;
    this.page8=false;
    this.page9=false;
    this.page10=false;
    this.page11=false;
    this.page12=false;
    this.page13=true;
    this.page14=false;
  }
  page14=false;
  clickphan14(){
    this.page6=false;
    this.page=true;
    this.page2=false;
    this.page3=false;
    this.page4=false;
    this.page5=false; 
    this.page7=false;
    this.page8=false;
    this.page9=false;
    this.page10=false;
    this.page11=false;
    this.page12=false;
    this.page13=false;
    this.page14=true;
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
  constructor(private CauhoiService: AppCauhoiService,private KiemtraService: AppKiemtraService) { }
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
    this.KiemtraService.getkiemtraList().snapshotChanges().pipe(
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
