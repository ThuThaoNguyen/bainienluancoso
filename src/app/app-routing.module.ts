import { NgModule } from '@angular/core';
import { Routes, RouterModule, ChildrenOutletContexts } from '@angular/router';
import {Page1Component} from './page1/page1.component';
import {AppComponent} from './app.component';
import {Page2Component} from './page2/page2.component';
import {Page3Component} from './page3/page3.component';
import { Page6Component } from './page6/page6.component';
//import {AppVideoComponent} from './page1/app-video/app-video.component';
//import {AppGiaotrinhComponent} from './page1/app-giaotrinh/app-giaotrinh.component';
//import {AppBaitapComponent} from './page1/app-giaotrinh/app-baitap/app-baitap.component';

const routes: Routes = [
  {path:'page1',loadChildren:()=> import('./page1/page1.module').then(m => m.Page1Module) },
  {path:'',component:AppComponent},
  {path:'kiemtra',loadChildren:()=> import('./kiemtra/kiemtra/kiemtra.module').then(m => m.KiemtraModule) },
  
  {path:'page2',loadChildren:()=> import('./page2/page2.module').then(m => m.Page2Module) },
  {path:'page3',loadChildren:()=> import('./page3/page3.module').then(m => m.Page3Module)},
  {path:'page4',loadChildren:()=> import('./page4/page4.module').then(m => m.Page4Module)},
  {path:'page5',loadChildren:()=> import('./page5/page5.module').then(m => m.Page5Module)},
  {path:'page6',component:Page6Component}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
