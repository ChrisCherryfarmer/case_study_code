import { Component, OnInit } from '@angular/core';
import { ArtikelverwaltungService } from '../../artikelverwaltung/artikelverwaltung.service';
import { Router } from '@angular/router';
import { Artikel } from '../../shared/models/artikel.model';

@Component({
  selector: 'app-fach-detail',
  templateUrl: './fach-detail.component.html',
  styleUrls: ['./fach-detail.component.scss']
})
export class FachDetailComponent implements OnInit {

  artikelList: Array<Artikel>;

  constructor(private artikelservice: ArtikelverwaltungService, private router: Router) { }

  ngOnInit(): void {
    this.artikelservice.loadArticles().subscribe(artikel => {
      this.artikelList = artikel;
    });
  }

  // getArtikel() {
  //   this.artikelservice.addArtikel(this.artikelnummer, this.name, this.beschreibung);
  //   this.router.navigate(['artikelverwaltung']);
  // }
}
