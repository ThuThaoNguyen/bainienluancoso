// import { Injectable } from '@angular/core';
// import * as io from 'socket.io-client'
// import { Observable } from 'rxjs/Observable';
// import * as Rx from 'rxjs/Rx';
// import { environment} from '../../../environments/environment';

// @Injectable({
//   providedIn: 'root'
// })
// export class WebSocketService {

//   // socket: any;
//   private socket;         // socket that connect to socket.io server

//   readonly url: string = "http://localhost:4200/"; //chi doc

//   constructor() { 
//     this.socket =io(this.url); // tao canh bao
//   }

//   connect ():Rx.Subject<MessageEvent>{
//     this.socket = io(this.url);

//     let observable = new Observable(observable =>{
//       this.socket.on('message', (data)=>{
//         console.log("received a message from websocket server");
//         observable.next(data);
//       })
//       return this.socket.disconnect();
//     });

//     let observer = {
//       next: (data: Object) => {
//           this.socket.emit('message', JSON.stringify(data));
//       },
//     };

//     return Rx.Subject.create(observer, observable);
//   }

  
  

  
//   listen(eventName: string){
//     return new Observable((subscriber) => {
//       this.socket.on(eventName, (data) => {
//         subscriber.next(data);
//       })
//     });
//   }


//   emit(eventName: string, data: any){
//     this.socket.emit(eventName, data); // tao ra 1 su kien voi ket noi
//   }

// // let app = require("express")();
// // let http = require("http").Server(app);
// // let io = require("socket.io")(http);

// // io.on("connection", socket => {
// //   // Log whenever a user connects
// //   console.log("user connected");

// //   // Log whenever a client disconnects from our websocket server
// //   socket.on("disconnect", function() {
// //     console.log("user disconnected");
// //   });

// }
