import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import {FormsModule} from '@angular/forms';
//import { Page1Component } from './page1/page1.component';
import { AppNavbarmainComponent } from './app-navbarmain/app-navbarmain.component';
import { AppHeaderComponent, BannerCtrlDirective } from './app-header/app-header.component';
import { AppCauhoiComponent } from './app-cauhoi/app-cauhoi.component';

import { ChatboxComponent } from './chatbox/chatbox.component';
import { AppBodyComponent } from './app-body/app-body.component';
import { AppMainfooterComponent } from './app-mainfooter/app-mainfooter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { JwPaginationComponent } from 'jw-angular-pagination';

import { Page6Component } from './page6/page6.component';
import { AdminComponent } from './admin/admin.component';
// import { DeDetailsComponent } from './kiemtra/de-details/de-details.component';
// import { KiemtraComponent } from './kiemtra/kiemtra.component';





@NgModule({
  declarations: [
    AppComponent,


    AppNavbarmainComponent,
    AppHeaderComponent,
    AppCauhoiComponent,
   
    ChatboxComponent,
    AppBodyComponent,
    AppMainfooterComponent,

      JwPaginationComponent,

     Page6Component,

     AdminComponent,
     BannerCtrlDirective,
     

    //  DeDetailsComponent,

     

    //  KiemtraComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase, 'fcc-book-trading'),
    AngularFireDatabaseModule,
    FormsModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,

   
  

  ],
  providers: [],
  bootstrap: [AppComponent],

 
})
export class AppModule { }
