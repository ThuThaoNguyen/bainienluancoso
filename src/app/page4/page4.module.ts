import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Page4RoutingModule} from './page4-routing.module';
import { AppVideoComponent } from './app-video/app-video.component';
import { AppGiaotrinhComponent } from './app-giaotrinh/app-giaotrinh.component';
import { AppBaitapComponent } from './app-baitap/app-baitap.component';
import {Page4Component} from './page4.component';
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
// import { AppPhan5Component } from './app-phan5/app-phan5.component';
// import { AppPhan6Component } from './app-phan6/app-phan6.component';
@NgModule({
  declarations: [
    Page4Component,
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
// AppPhan5Component,
// AppPhan6Component,
  ],
  imports: [
    CommonModule,
    Page4RoutingModule,
    NgxPaginationModule,
    AngularMaterialModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Page4Module { }
