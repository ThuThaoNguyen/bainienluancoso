import { Component, OnInit, Input } from '@angular/core';
import { KtraService } from './ktra.service';
import { map } from 'rxjs/operators';
import { kiemtra } from './kiemtra/ktra';
import { ActivatedRoute, Router } from '@angular/router';
import { De } from './de';
// import { WebSocketService } from './kiemtra/web-socket.service';

@Component({
  selector: 'app-kiemtra',
  templateUrl: './kiemtra.component.html',
  styleUrls: ['./kiemtra.component.css']
})
export class KiemtraComponent implements OnInit {

  @Input() de: De;
  page:boolean=false;
  dekt: any;
 

  constructor(private ktservice: KtraService, 
              private router: Router,
              // private websocketService: WebSocketService
              ) { }

  // @Input() ktr :kiemtra;
  
  
  ngOnInit() {
    this. getLISTDE(); 

  }



  setClick(){
    this.page=true;
  }

  getLISTDE() {
    this.ktservice.getListDe().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(kt => {
      this.dekt = kt;
    });
  }

  gotoEXAPLE(type: any) {
    this.router.navigate(['/bode/', type]);
  }
  textsearch:string;
//   chuoi=new Array();
//  b=new Array();
//  c=new Array();
 
answer= new Array();
value=false;
// //   similarities (a:string,f:string){
         
//      this.b=a.toLowerCase().split(" ");
// //     this.c=f.toLowerCase().split(" ");
// //     this.chuoi=this.b.concat(this.c);
// //  // for(var index in this.chuoi)
// //  //    {console.log(this.chuoi[index]); }

        
// // }
search(){
  for(let i=0;i<this.answer.length;i++){
     this.answer[i]=null;
    }
    for(  this.de of this.dekt ){
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
           if(this.textsearch==""&&this.answer.length==0){this.value=false; }
           else if(this.textsearch!=null && this.de.tende!=null) {
            b=this.textsearch.toLowerCase().split(" ");
            c=this.de.tende.toLowerCase().split(" ");
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
                  
                  if(consin>1/2 && this.answer.length==0){
                    console.log(this.de.tende);
                    this.answer.push(this.de.tende);
                  }
                  else if(consin>1/2 && this.answer.length>0) {
                    var test:number=0;
                     for (let i=0; i<this.answer.length;i++){
                        if (this.answer[i]==this.de.tende ){ 
                            test=test+1;
                          }
                        }

                    if(test==0) {this.answer.push(this.de.tende);}
                   } 
     }  }
     this.value=true;
  
    }
}
  


