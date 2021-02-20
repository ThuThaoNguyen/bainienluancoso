
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppVideoComponent} from './app-video/app-video.component';
import {AppGiaotrinhComponent} from './app-giaotrinh/app-giaotrinh.component';
import {AppBaitapComponent} from './app-baitap/app-baitap.component';
import { Page5Component } from './page5.component';
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
const routes: Routes = [
 {
   path:'', component: Page5Component, children: [
      {path: 'video', component: AppVideoComponent},
      { path: 'giaotrinh', component: AppGiaotrinhComponent},
      { path: 'baitap', component: AppBaitapComponent },
      {path:'phan2',component:AppPhan2Component},
      {path:'phan3',component:AppPhan3Component},
      {path:'phan4',component:AppPhan4Component},
      {path:'phan5',component:AppPhan5Component},
      {path:'phan6',component:AppPhan6Component},
      {path:'phan7',component:AppPhan7Component},
      {path:'phan8',component:AppPhan8Component},
      {path:'phan9',component:AppPhan9Component},
      {path:'phan10',component:AppPhan10Component},
      {path:'phan11',component:AppPhan11Component},
      {path:'phan12',component:AppPhan12Component},
      {path:'phan13',component:AppPhan13Component},
      {path:'phan14',component:AppPhan14Component},
       
   ]
  }
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Page5RoutingModule { }