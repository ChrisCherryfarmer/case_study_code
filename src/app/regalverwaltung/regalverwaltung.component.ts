import { Component, OnInit } from '@angular/core';
import { Ebene } from '../shared/models/ebene.model';
import { Artikel } from '../shared/models/artikel.model';
import { Fach } from '../shared/models/fach.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regalverwaltung',
  templateUrl: './regalverwaltung.component.html',
  styleUrls: ['./regalverwaltung.component.scss']
})
export class RegalverwaltungComponent implements OnInit {
  ebenen: Array<Ebene> = [];

  constructor(private router: Router) {
  }

  ngOnInit(): void {

    for (let i = 0; i < 10; i++) {

      const faecher: Array<Fach> = [];
      for (let j = 0; j < 40; j++) {
        let fach = null;
        if (j % 2 === 0) {
          fach = new Fach(true, [new Artikel('0001', 'Controller', 'Controller für die PS5')]);
        } else {
          fach = new Fach(false, []);
        }
        faecher.push(fach);
      }
      const ebene = new Ebene(faecher);
      this.ebenen.push(ebene);
    }

    console.log('ebenen', this.ebenen);


    this.ebenen.push();
  }

  openFach() {
    this.router.navigate(['regalverwaltung/fach-detail']);
  }
}
