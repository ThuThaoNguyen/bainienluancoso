import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KtraService } from '../ktra.service';
import { kiemtra } from '../kiemtra/ktra';
import { map } from 'rxjs/operators';
import { De } from '../de';
import {  Router } from '@angular/router';
import { Location } from '@angular/common';

// import { ROUTER_DIRECTIVES } from '@angular/router';
// import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-bode',
  templateUrl: './bode.component.html',
  styleUrls: ['./bode.component.css']
})
export class BodeComponent implements OnInit {

  type: number;
  @Input() ktr :kiemtra;
  @Input() csdlde :De;

  kt:any;
  stt: number;
  de:any;

  

  constructor(private activatedRoute: ActivatedRoute, 
              private ktservice: KtraService,
              private location: Location,
              // private socket: Socket
              ) { }

  ngOnInit() {
    this. getLIST();
    this.getLISTDE();
  
    if(!this.chuyen){
    this.type = this.activatedRoute.snapshot.params.type;}
    // console.log(status);
    setInterval(() => {
      this.time = new Date();
   }, 1000);

  }


  hh= false;
  clickPercent(){
    this.hh=true;
  }

  time = new Date();

  goback() {
    this.location.back(); 
  }

  getLIST() {
    this.ktservice.getList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(kt => {
      this.kt = kt;
    });
  }

  getLISTDE() {
    this.ktservice.getListDe().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(csdlde => {
      this.de = csdlde;
    });
  }


  dapan=false;
 
  xemdapan(key:string, kt:kiemtra){
    kt.status=true;
    this.ktservice.update(key,kt);
  }

  
  trl = "dapann";
  dapann:string;
  
  
  getcautraloi(key:string,kt:kiemtra ){
    this.ktservice.update(key,kt);

  }



  clear(key:string,kt:kiemtra){
    kt.status=false;
    this.ktservice.update(key,kt);
  }
//   onChangePage(pageOfItems: Array<any>) {
//     // update current page of items
//     this.pageOfItems = pageOfItems;
// }
sumit:boolean=false;
sumitda(){
  this.sumit=true;
  }
traloi:string;
// chuoi=new Array();
//  b=new Array();
//  c=new Array();
// d= new Array();
// // d=[0,1,1,1,0];

//  e=new Array();
// // e=[0,1,1,1,0];

answer= new Array();

core: number;
a:number;

 danhgia(key:string,dapan:string, dapan_kt:string){
   console.log(key);
   console.log(dapan);
   console.log(dapan_kt)

  for(  this.ktr of this.kt ){
    var d= new Array();
    var e=new Array();
    var consin: number;
    var tong: number;
    var chieudai1:number;
    var chieudai2:number;
    var tich:number;
    var a:number;
    var p:number;
    var chuoi=new Array();
    var  b=new Array();
    var c=new Array();
   //  console.log(this.de.tende);
   // console.log(this.textsearch);
   if(dapan=="") {
    this.ktr.core=0;
    this.getcautraloi(this.ktr.key,this.ktr); } 
        if(this.ktr.key==key&&dapan!="" && dapan_kt!=null) {
         b=dapan.toLowerCase().split(" ");
         console.log(b);
         c=dapan_kt.toLowerCase().split(" ");
         chuoi=b.concat(c);
         console.log(c);

           console.log(chuoi);  }
         for (let i=0;i< chuoi.length;i++){
             p=0;
            for (let k=0;k< b.length;k++){
                 if(chuoi[i]===b[k]){
                     p=p+1;
                     // this.e.push(this.p);
                    }
                 else { 
                     //  this.e.push(this.p);
                     p=p+0;
                     }
                 }
             e.push(p);
             a=0;
            for (let j=0;j< c.length;j++){
                  if(chuoi[i]===c[j]){
                         a=a+1;
                         // this.d.push(this.a);
                         }
                  else {  
                         // this.d.push(this.a);
                         a=a+0;
                       }
               }
             d.push(a);

         }
             
     
               
                tong=0;
               
                chieudai1=0;
               
                chieudai2=0;
              
        
            for (let i=0;i<chuoi.length;i++){
                 tong=tong+(d[i]*e[i]);
                }
            for (let i=0;i<chuoi.length;i++){
                 chieudai1=chieudai1+ Math.pow(d[i],2);
                }
           for (let i=0;i<chuoi.length;i++){
                 chieudai2=chieudai2+ Math.pow(e[i],2);
                }

                tich=Math.sqrt(chieudai1)*Math.sqrt(chieudai2);
             
                if(tich==0){ consin=0;
                   
                  }
                else {consin=tong/tich;
                  
                }
                console.log(consin);
                this.ktr.core=Math.ceil(consin*100); //Hàm Math.ceil() trả về số nguyên nhỏ nhất có giá trị lớn hơn hoặc bằng số đã cho.
                if (this.ktr.core>100) {this.ktr.core=100;}
                if(this.ktr.core<0){this.ktr.core=0;}
                console.log(this.ktr.core);
                this.getcautraloi(this.ktr.key,this.ktr);
      } 
     
     
    }
 
  
  xemdanhgia(type:any){
    //  console.log(key);
    //  console.log(dapan);
    //  console.log(dapan_kt)
  
    for(  this.ktr of this.kt ){
      if(this.ktr.type==type){
      var d= new Array();
      var e=new Array();
      var consin: number;
      var tong: number;
      var chieudai1:number;
      var chieudai2:number;
      var tich:number;
      var a:number;
      var p:number;
      var chuoi=new Array();
      var  b=new Array();
      var c=new Array();
     //  console.log(this.de.tende);
     // console.log(this.textsearch);
           if(this.ktr.traloi=="") {
              this.ktr.core=0;
              this.getcautraloi(this.ktr.key,this.ktr); } 
          if( this.ktr.traloi_kt!=""&&this.ktr.traloi!="") {
           b=this.ktr.traloi.toLowerCase().split(" ");
           c=this.ktr.traloi_kt.toLowerCase().split(" ");
           chuoi=b.concat(c);
               // console.log(chuoi);  }
           for (let i=0;i< chuoi.length;i++){
               p=0;
              for (let k=0;k< b.length;k++){
                   if(chuoi[i]===b[k]){
                       p=p+1;
                       // this.e.push(this.p);
                      }
                   else { 
                       //  this.e.push(this.p);
                       p=p+0;
                       }
                   }
               e.push(p);
               a=0;
              for (let j=0;j< c.length;j++){
                    if(chuoi[i]===c[j]){
                           a=a+1;
                           // this.d.push(this.a);
                           }
                    else {  
                           // this.d.push(this.a);
                           a=a+0;
                         }
                 }
               d.push(a);
  
           }
               
       
                 
                  tong=0;
                 
                  chieudai1=0;
                 
                  chieudai2=0;
                
          
              for (let i=0;i<chuoi.length;i++){
                   tong=tong+(d[i]*e[i]);
                  }
              for (let i=0;i<chuoi.length;i++){
                   chieudai1=chieudai1+ Math.pow(d[i],2);
                  }
             for (let i=0;i<chuoi.length;i++){
                   chieudai2=chieudai2+ Math.pow(e[i],2);
                  }
  
                  tich=Math.sqrt(chieudai1)*Math.sqrt(chieudai2);
               
                  if(tich==0){ consin=0;
                     
                    }
                  else {consin=tong/tich;
                    
                  }
                  console.log(consin);
                  this.ktr.core=Math.ceil(consin*100); //Hàm Math.ceil() trả về số nguyên nhỏ nhất có giá trị lớn hơn hoặc bằng số đã cho.
                  if (this.ktr.core>100) {this.ktr.core=100;}
                  if(this.ktr.core<0){this.ktr.core=0;}
                  console.log(this.ktr.core);
                  this.getcautraloi(this.ktr.key,this.ktr);
        } 
        else {this.ktr.core=0;
           this.getcautraloi(this.ktr.key,this.ktr);
        }
       } }
   
    }
  getclear(){
    for(  this.ktr of this.kt ){
      this.ktr.traloi="";
      this.ktr.core=null;
    this.ktservice.update(this.ktr.key,this.ktr);
    }
  }
  chuyen=false;
  chuyende(type:any){
    this.chuyen=true;
    this.type=type;
    // console.log(this.type);
  }

  
  sophantu(i:number,type:any):any{
    var count=0;
    var stt:any;
    var last =new Array();
    // console.log(type);
    //  console.log(i);
    for (this.ktr of this.kt){
      if (this.ktr.type==type){
         count=count+1;
         last.push(this.ktr.STT_kt);
      }
        }
        // console.log(count);
        // for (let i=0; i<last.length;i++){
        //   console.log(last[i]);
        // }
   return count - (last[count-2]-i);

  }

}
