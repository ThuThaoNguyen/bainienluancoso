import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Page5RoutingModule} from './page5-routing.module';
import { AppVideoComponent } from './app-video/app-video.component';
import { AppGiaotrinhComponent } from './app-giaotrinh/app-giaotrinh.component';
import { AppBaitapComponent } from './app-baitap/app-baitap.component';
import {Page5Component} from './page5.component';
import { DetailBaitapComponent } from './app-baitap/detail-baitap/detail-baitap.component';
import { AppDetailsGiaotrinhComponent } from './app-giaotrinh/app-details-giaotrinh/app-details-giaotrinh.component';
import {AppDetailsVideoComponent} from './app-video/app-details-video/app-details-video.component';
import {AppKiemtraComponent} from './app-kiemtra/app-kiemtra.component';
//import {AppTraloiComponent} from './app-kiemtra/app-traloi/app-traloi.component';
//import { JwPaginationComponent } from 'jw-angular-pagination';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule } from 'ngx-pagination';

// import {baitap} from './app-baitap';

/* Angular material */
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppPhan2Component } from './app-phan2/app-phan2.component';
import { AppPhan3Component } from './app-phan3/app-phan3.component';
import { AppPhan4Component } from './app-phan4/app-phan4.component';
import { AppPhan5Component } from './app-phan5/app-phan5.component';
import { AppPhan6Component } from './app-phan6/app-phan6.component';
import { AppPhan7Component } from './app-phan7/app-phan7.component';
import { AppPhan8Component } from './app-phan8/app-phan8.component';
import { AppPhan9Component } from './app-phan9/app-phan9.component';
import { AppPhan10Component } from './app-phan10/app-phan10.component';
import { AppPhan11Component } from './app-phan11/app-phan11.component';
import { AppPhan12Component } from './app-phan12/app-phan12.component';
import { AppPhan13Component } from './app-phan13/app-phan13.component';
import { AppPhan14Component } from './app-phan14/app-phan14.component';
@NgModule({
  declarations: [
    Page5Component,
    AppVideoComponent,
  AppGiaotrinhComponent,
  AppBaitapComponent,
  DetailBaitapComponent,
  AppDetailsGiaotrinhComponent,
  AppDetailsVideoComponent,
  AppKiemtraComponent,
 // AppTraloiComponent
 //JwPaginationComponent
//  baitap
AppPhan2Component,
AppPhan3Component,
AppPhan4Component,
AppPhan5Component,
AppPhan6Component,
AppPhan7Component,

AppPhan8Component,

AppPhan9Component,

AppPhan10Component,

AppPhan11Component,

AppPhan12Component,

AppPhan13Component,

AppPhan14Component,
  ],
  imports: [
    CommonModule,
    Page5RoutingModule,
    NgxPaginationModule,
    AngularMaterialModule,
    FormsModule 
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Page5Module { }
