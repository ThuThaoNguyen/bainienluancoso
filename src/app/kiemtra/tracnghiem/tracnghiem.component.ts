import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KtraService } from '../ktra.service';
import { map } from 'rxjs/operators';
import { De } from '../de';
import { kiemtra, Player } from '../kiemtra/ktra';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/timer'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/take'
import { Pipe, PipeTransform } from '@angular/core';
import {  ViewEncapsulation, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CountdownComponent } from 'ngx-countdown';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
// import { WebSocketService } from '../kiemtra/web-socket.service';


@Component({
  selector: 'app-tracnghiem',
  templateUrl: './tracnghiem.component.html',
  styleUrls: ['./tracnghiem.component.css']
})

export class TracnghiemComponent implements OnInit {
  
   status="start";
 @ViewChild('cd',{static:false})  countdown: CountdownComponent;
 

  type: number;
  @Input() ktr :kiemtra;
  @Input() csdlde :De;

  kt:any;
  stt: number;
  de:any;
  
  
  ipAddress = '';
  constructor(private activatedRoute: ActivatedRoute, 
              private ktservice: KtraService,
              private location: Location,
              private http:HttpClient
              // private websocketService: WebSsocketService
              ) { }



  ngOnInit() {
    this. getLIST();
    this.getLISTDE();
    this.type = this.activatedRoute.snapshot.params.type;  
    this.getIPAddress();
    // this.ListenEventSocketSer();
    
  }

  

  getIPAddress()
  {
    this.http.get("http://api.ipify.org/?format=json").subscribe((res:any)=>{
      this.ipAddress = res.ip;

    });
  }



  // ListenEventSocketSer(){
  //   this.ktservice.messages.subscribe(msg => {
  //     console.log(msg);
  //   })
  // }
  // sendMessage() {
  //   this.ktservice.sendMsg("Test Message");
  // }


  handleEvent(){
    // this.countdown.restart();
    // console.log(this.countdown.left);
    if(this.countdown.left==0){this.getchuoi(this.type);}
  }


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
   sophantu(i:number,type:any):any{
     var count=0;
     var stt:any;
     var last =new Array();
    //  console.log(type);
    //  console.log(i);
     for (this.ktr of this.kt){
       if (this.ktr.type==type){
          count=count+1;
          last.push(this.ktr.STT_kt);
       }
         }
        //  console.log(count);
        //  for (let i=0; i<last.length;i++){
        //    console.log(last[i]);
        //  }
    return count - (last[count-1]-i)+1;

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
chuoi=new Array();
 b=new Array();
 c=new Array();
d= new Array();
// d=[0,1,1,1,0];

 e=new Array();
// e=[0,1,1,1,0];


core: number=0;
a:number;

 getchuoi(type:any){
  //  this.status="finished";
   this.a=0;

   for(  this.ktr of this.kt ){
     if(this.ktr.type==type){

        this.ktr.core=0;    
        this.ktr.rightA=false;
        this.ktr.rightC=false;
        this.ktr.rightB=false;
        this.ktr.wrongA =false;
        this.ktr.wrongB =false;
        this.ktr.wrongC =false;

       if(this.ktr.traloi!=null&& this.ktr.traloi_kt!=null){
          if(this.ktr.traloi==this.ktr.traloi_kt){
            
            this.ktr.core=1;


          }
            else if (this.ktr.traloi != this.ktr.traloi_kt){
              if (this.ktr.traloi == 'A'){
                this.ktr.wrongA=true;
              } else if (this.ktr.traloi == 'B') {
                this.ktr.wrongB=true;
              } else if(this.ktr.traloi == 'C')
              this.ktr.wrongC=true;
            }


          // } 
        
        }

          if(this.ktr.traloi_kt=='A'){
            this.ktr.rightA=true;
           

          }
          else if(this.ktr.traloi_kt=='B'){
             this.ktr.rightB=true;
            
  
          }
          else{
            this.ktr.rightC=true;
           
          }
         
       this.getcautraloi(this.ktr.key,this.ktr); 
      //  console.log(this.ktr.core);
      //  console.log(this.a);
       this.a = this.a + this.ktr.core;
   


    }

  }
  console.log(this.a);
  return this.a;
  }
  // getclear(){
  //   for(  this.ktr of this.kt ){
  //     this.ktr.traloi="";
  //     this.ktr.core=null;
  //     this.ktr.rightA=null;
  //     this.ktr.rightB=null;
  //     this.ktr.rightC=null;
  //     this.ktr.wrongA =null ;
  //       this.ktr.wrongB =null;
  //       this.ktr.wrongC =null;

  //   this.ktservice.update(this.ktr.key,this.ktr);
  //   }
  // }
 
  xemdiem=false;
  player: Player =new Player();
  dapancheck(key:string,kq:string){
    this.xemdiem=true;
    for(  this.ktr of this.kt ){
      if(this.ktr.key==key){
             this.player.traloiuser=kq;
             this.player.user=this.ipAddress;
             this.ktservice.createPlayer(this.player,this.ktr.key);
        }
    
    }
   
  }



  chuyen=false;
  chuyende(type:any){
    this.chuyen=true;
    this.type=type;
    // console.log(this.type);
  }


  
 @Input() players:Player;
 Player:any;
 getlistPlayer(key:string) {

   this.ktservice.getListPlayer(key).snapshotChanges().pipe(
     map(changes =>
       changes.map(c =>
         ({ key: c.payload.key, ...c.payload.val() })
       )
     )
   ).subscribe(Player => {
     this.Player = Player;
   });
   console.log('get list');
 }


getclear(){
   for( let ktr of this.kt ){
   
       this.ktr.traloi="";
       this.ktr.core=null;
       this.ktr.rightA=null;
       this.ktr.rightB=null;
       this.ktr.rightC=null;
       this.ktr.wrongA =null ;
         this.ktr.wrongB =null;
         this.ktr.wrongC =null;
       
     this.ktservice.update(this.ktr.key,this.ktr);
     
     //  var Player:any;
        // this.getlistPlayer(this.ktr.key);

     for( let players of this.Player){
       console.log(this.players.user);
       console.log(this.players.traloiuser);
       // this.ktr.traloi="";
       this.players.core=null;
       this.players.rightA=null;
       this.players.rightB=null;
       this.players.rightC=null;
       this.players.wrongA =null ;
         this.players.wrongB =null;
         this.players.wrongC =null;
         this.players.traloiuser=null;
         this.players.user=null;
     // this.ktservice.updateplayer(this.ktr.key,this.players.key,this.players);
     }  


   }
 }
 

}
