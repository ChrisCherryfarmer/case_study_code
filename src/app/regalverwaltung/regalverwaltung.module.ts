import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegalverwaltungComponent } from './regalverwaltung.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: RegalverwaltungComponent},
  {
    path: 'fach-detail',
    loadChildren: () => import('./fach-detail/fach-detail.module').then(m => m.FachDetailModule),
  },
];



@NgModule({
  declarations: [RegalverwaltungComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RegalverwaltungModule { }
