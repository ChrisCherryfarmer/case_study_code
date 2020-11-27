import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtikelDetailComponent } from './artikel-detail.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {path: '', component: ArtikelDetailComponent}
];

@NgModule({
  declarations: [ArtikelDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ArtikelDetailModule { }
