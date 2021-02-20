import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { kiemtra } from './kiemtra/ktra';
import { De } from './de';
// import { Socket } from 'ngx-socket-io';
// import { AngularFirestore } from '@angular/fire/firestore';
import { Player } from './kiemtra/ktra';
@Injectable({
  providedIn: 'root'
})
export class KtraService {

  private dbPath = '/Kiemtra';
  ktRef: AngularFireList<kiemtra> = null;
  private dbPathplayer :string;
  playerRef: AngularFireList<Player> = null;
  private dbPathde = '/De';
  deRef: AngularFireList<De> = null;

  cauhoiRefObject: AngularFireObject<any>;
//  id:Socket;
  constructor(private db: AngularFireDatabase) {
      this.ktRef = db.list(this.dbPath);
      this.deRef = db.list(this.dbPathde);
      // this.playerRef=db.list(this.dbPathplayer);
   }

  getList(): AngularFireList<kiemtra> {
    return this.ktRef;
  }
  getListPlayer(key:string): AngularFireList<Player> {
    this.dbPathplayer = '/Kiemtra/'+key+'/player';
    this.playerRef=this.db.list(this.dbPathplayer);
    return this.playerRef;
  }
  getListDe(): AngularFireList<De> {
    return this.deRef;
  }
  getListDeOjb(key: string): AngularFireList<De> {
    return this.deRef;
  }
  update(key:string, value:any):Promise<void>{
    // this.socket.connect();
   return this.ktRef.update(key,value);
  // return this.socket.emit( "add",function(socket){
  //     this.ktRef.update(key,value)});
  //     console.log("đang thêm giá trị"+ this.id);
  }
  
  getobj(key: string): AngularFireList<De> {
    return this.deRef;
  }

        // get 1 doi tuong cụ thể
      GetCAUHOIobject(key: string) {
        this.cauhoiRefObject = this.db.object('de/' + key);
        return this.cauhoiRefObject;
      }
    createPlayer(player: Player,key:string):void{
    this.dbPathplayer = '/Kiemtra/'+key+'/player';
    this.playerRef=this.db.list(this.dbPathplayer);
    this.playerRef.push(player);
  }
  updateplayer(key:string,keyplayer:string, value:any):Promise<void>{
    // this.socket.connect();
    this.dbPathplayer = '/Kiemtra/'+key+'/player';
    this.playerRef=this.db.list(this.dbPathplayer);
    
   return this.playerRef.update(keyplayer,value);

  }}