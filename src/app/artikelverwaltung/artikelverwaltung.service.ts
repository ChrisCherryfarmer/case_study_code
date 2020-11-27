import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Artikel } from '../shared/models/artikel.model';

@Injectable({
  providedIn: 'root'
})
export class ArtikelverwaltungService {
  artikelListe: Array<Artikel>;

  constructor() {
    console.log('create artikel');
    this.artikelListe = [
      {
        artikelnummer: '0001',
        name: 'ControllerPS5',
        beschreibung: 'Controller für die PS5'
      }, {
        artikelnummer: '0002',
        name: 'ControllerPS4',
        beschreibung: 'Controller für die PS4'
      }, {
        artikelnummer: '0003',
        name: 'System',
        beschreibung: 'PS5 System'
      }, {
        artikelnummer: '0004',
        name: 'Ladestation',
        beschreibung: 'Ladestation für die Controller'
      }, {
        artikelnummer: '0005',
        name: 'Kamera',
        beschreibung: 'PS5 Camera for Gaming'
      }
    ];

  }

  loadArticles(): Observable<Array<Artikel>> {

    return of(this.artikelListe);
  }

  addArtikel(nummer: string, name: string, beschreibung: string) {
    this.artikelListe.push(new Artikel(nummer, name, beschreibung));
  }
}
