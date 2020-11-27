import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtikelverwaltungComponent } from './artikelverwaltung.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: ArtikelverwaltungComponent},
  {
    path: 'artikel-detail',
    loadChildren: () => import('./artikel-detail/artikel-detail.module').then(m => m.ArtikelDetailModule),
  },
];

@NgModule({
  declarations: [ArtikelverwaltungComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ArtikelverwaltungModule {
}
