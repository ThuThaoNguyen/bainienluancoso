import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppVideoComponent} from './app-video.component';
import { AppVideoRoutingModule } from './app-video-routing.module';
import { AppDetailsVideoComponent } from './app-details-video/app-details-video.component';


@NgModule({
  declarations: [
    AppVideoComponent,
    AppDetailsVideoComponent,
    
  ],
  imports: [
    CommonModule,
    AppVideoRoutingModule
  ]
})
export class AppVideoModule { }
