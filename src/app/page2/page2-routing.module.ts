
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppVideoComponent} from './app-video/app-video.component';
import {AppGiaotrinhComponent} from './app-giaotrinh/app-giaotrinh.component';
import {AppBaitapComponent} from './app-baitap/app-baitap.component';
import { Page2Component } from './page2.component';
import { AppPhan2Component } from './app-phan2/app-phan2.component';
import { AppPhan3Component } from './app-phan3/app-phan3.component';
import { AppPhan4Component } from './app-phan4/app-phan4.component';
import { AppPhan5Component } from './app-phan5/app-phan5.component';

const routes: Routes = [
 {
   path:'', component: Page2Component, children: [
      {path: 'video', component: AppVideoComponent},
      { path: 'giaotrinh', component: AppGiaotrinhComponent},
      { path: 'baitap', component: AppBaitapComponent },
      {path:'phan2',component:AppPhan2Component},
      {path:'phan3',component:AppPhan3Component},
      {path:'phan4',component:AppPhan4Component},
      {path:'phan5',component:AppPhan5Component},

       
   ]
  }
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Page2RoutingModule { }