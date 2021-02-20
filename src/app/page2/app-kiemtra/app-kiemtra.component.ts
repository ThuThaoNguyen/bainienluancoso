import { Component, OnInit, Input}from '@angular/core';
import{AngularFireDatabase} from 'angularfire2/database';
import{Observable} from 'rxjs';
import { AppKiemtraService } from '../app-kiemtra.service';
import { Kiemtras } from '../app-kiemtra';


import { map } from 'rxjs/operators';

@Component({
  selector: 'app-kiemtra',
  templateUrl: './app-kiemtra.component.html',
  styleUrls: ['./app-kiemtra.component.css']
})
export class AppKiemtraComponent implements OnInit {
  value:boolean=false;
  @Input() kiemtras: Kiemtras;
  cautraloi:any;
  STT:number;
  
  pageOfItems: Array<any>;

  
  constructor(private Kiemtraservice:  AppKiemtraService ){
   }
   ngOnInit() { }
 
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
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}
traloi:string;
chuoi=new Array();
 b=new Array();
 c=new Array();
d= new Array();
// d=[0,1,1,1,0];

 e=new Array();
// e=[0,1,1,1,0];

answer= new Array();
similarities (a:string,d:string){
  a.toLowerCase();
  d.toLowerCase();
  this.b=a.split(" ");
  this.c=d.split(" ");
 
// for(var index in this.chuoi)
//    {console.log(this.chuoi[index]); }

      
}   
sumit:boolean=false;
sumitda(){
    this.sumit=true;}
core: number;
a:number;

getchuoi(){
 this.a=0;
        if(this.traloi!=null){
           this.similarities(this.traloi,this.kiemtras.traloi_kt);
           // console.log(this.chuoi);
        }
        for (let i=0;i< this.c.length;i++){
          for (let j=0;j< this.b.length;j++){
               if(this.c[i]===this.b[j]){
                  this.a=this.a+1;
                 
                } 
                 

               }
              }
            var diem:number;
            diem =(this.a/this.c.length)*(100);
            this.core=Math.ceil(diem);
            if (this.core>100) {this.core=100;}
                             
          
      } 
}
