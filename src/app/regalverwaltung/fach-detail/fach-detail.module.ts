import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FachDetailComponent } from './fach-detail.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {path: '', component: FachDetailComponent}
];

@NgModule({
  declarations: [FachDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class FachDetailModule { }
