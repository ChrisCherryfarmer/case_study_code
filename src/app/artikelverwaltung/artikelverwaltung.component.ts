import { Component, OnInit } from '@angular/core';
import { ArtikelverwaltungService } from './artikelverwaltung.service';
import { Artikel } from '../shared/models/artikel.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-artikelverwaltung',
  templateUrl: './artikelverwaltung.component.html',
  styleUrls: ['./artikelverwaltung.component.scss']
})
export class ArtikelverwaltungComponent implements OnInit {

  artikelList: Array<Artikel> = [];

  constructor(private artikelService: ArtikelverwaltungService, private router: Router) {
  }

  ngOnInit(): void {
    this.artikelService.loadArticles().subscribe((artikelList: Array<Artikel>) => {
      console.log('subscribe artikel', artikelList);
      this.artikelList = artikelList;
    });

  }

  createArtikel(): void {
    this.router.navigate(['artikelverwaltung/artikel-detail']);
  }
}
