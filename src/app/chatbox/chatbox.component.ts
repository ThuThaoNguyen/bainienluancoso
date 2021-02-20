import { Component, OnInit, Input } from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";
import {Observable} from "rxjs";
import { AppCauhoiService } from '../page1/app-cauhoi.service';
import { map } from 'rxjs/operators';
import { Cauhois } from '../page1/app-cauhoi';
import { CheckboxRequiredValidator } from '@angular/forms';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})



export class ChatboxComponent  {
  @Input() cauhoi_traloi:Cauhois
  cauhois:any;
  // cauhoiObservable: Observable<any>;
  // constructor(public db: AngularFireDatabase) { 
  // }
  constructor(private CauhoiService: AppCauhoiService) { }
// cauhoi= new Array();
cauhoi:string;
question:string;
submit:boolean=false;
value:boolean=false;
name:string="";

id:number=1000;
dapan: string;

max:number ;
ngOnInit(){
      this.getcauhoiList(); 
   
           }


  getchuoi(){
    // this.dapan
    this.max=0;
    for(  this.cauhoi_traloi of this.cauhois ){
       
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
          if(this.cauhoi_traloi && this.cauhoi_traloi.cauhoi!=null&&this.question!=null) {
           b=this.question.toLowerCase().split(" ");
           c=this.cauhoi_traloi.cauhoi.toLowerCase().split(" ");
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
                 
                  if (consin >this.max){ 
                    this.max=consin;
                   this.dapan=this.cauhoi_traloi.traloi;
                  //  this.answer.push(this.dapan);
                    //                          }
                  } 
    }  
  }
  //  this.answer.push(this.dapan);
  console.log(this.dapan);
  if(this.dapan!=null){this.exit=true;}
}
     
  

setclick(){
  this.name=prompt("Tên của bạn là gì?",);
  if(this.name!=null&&this.name!=""){this.value=true;}
}
removeclick(){
  this.value=false;
  this.submit=false;
 
}
exit=false;
 send(question:string){
 this.cauhoi=question;
// //  this.cauhoi.push(this.question);
 this.submit=true;
// if(this.dapan!=null){this.exit=true;}

 }
// add():void{
//   this.db.list('/cauhoi').push(this.question);
// }
cauhoimoi : Cauhois= new Cauhois();
save():void {
  this.CauhoiService.createcauhoi(this.cauhoimoi);
  this.cauhoimoi= new Cauhois();

}
getcauhoiList() {
  this.CauhoiService.getcauhoiList().snapshotChanges().pipe(
    map(changes =>
      changes.map(c =>
        ({ key: c.payload.key, ...c.payload.val() })
      )
    )
  ).subscribe(cauhoi => {
    this.cauhois = cauhoi;
   
    
  });
}

} 



 
  


