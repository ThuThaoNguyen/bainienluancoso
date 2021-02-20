import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KiemtraComponent } from '../kiemtra.component';
import { BodeComponent } from '../bode/bode.component';
import { TracnghiemComponent } from '../tracnghiem/tracnghiem.component';

const routes: Routes = [
  { path:'', component: KiemtraComponent },
  { path: 'bode/:type', component: BodeComponent},
  { path: 'tracnghiem/:type', component: TracnghiemComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KiemtraRoutingModule { }
