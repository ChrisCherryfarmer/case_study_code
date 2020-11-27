import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'artikelverwaltung',
    loadChildren: () => import('./artikelverwaltung/artikelverwaltung.module').then(m => m.ArtikelverwaltungModule),
  },
  {
    path: 'regalverwaltung',
    loadChildren: () => import('./regalverwaltung/regalverwaltung.module').then(m => m.RegalverwaltungModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
