import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownModule } from 'ngx-countdown';

import { KiemtraRoutingModule } from './kiemtra-routing.module';
import { KiemtraComponent } from '../kiemtra.component';
import { BodeComponent } from '../bode/bode.component';
import { DeDetailsComponent } from '../de-details/de-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TracnghiemComponent } from '../tracnghiem/tracnghiem.component';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import {WebSocketService} from '../kiemtra/web-socket.service';
import {KtraService} from '../ktra.service';

import { HttpClientModule } from '@angular/common/http';
// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
  


// const config: SocketIoConfig = { url: 'http://localhost:4200', options: {} };

@NgModule({
  declarations: [
    KiemtraComponent,
    BodeComponent,
    DeDetailsComponent,
    TracnghiemComponent,

  ],
  imports: [
    CommonModule,
    KiemtraRoutingModule,
    FormsModule,
    CountdownModule,
    ReactiveFormsModule,
    
    // BrowserModule,
    // SocketIoModule.forRoot(config),
    HttpClientModule,
    // BrowserModule

    
    
  ],
  providers: [
    // WebSocketService,
    KtraService
  ],
  bootstrap: [],
})
export class KiemtraModule { }
