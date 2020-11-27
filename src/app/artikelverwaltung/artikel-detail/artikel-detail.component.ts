import { Component, OnInit } from '@angular/core';
import { ArtikelverwaltungService } from '../artikelverwaltung.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artikel-detail',
  templateUrl: './artikel-detail.component.html',
  styleUrls: ['./artikel-detail.component.scss']
})
export class ArtikelDetailComponent implements OnInit {
  artikelnummer: string;
  name: string;
  beschreibung: string;

  constructor(private artikelservice: ArtikelverwaltungService, private router: Router) { }

  ngOnInit(): void {
  }

  saveArtikel() {
    this.artikelservice.addArtikel(this.artikelnummer, this.name, this.beschreibung);
    this.router.navigate(['artikelverwaltung']);
  }
}
