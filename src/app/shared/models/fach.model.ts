import { Artikel } from './artikel.model';

export class Fach {
  istBelegt: boolean;
  gelagerteArtikel: Array<Artikel> = [];

  constructor(istBelegt: boolean, gelagerteArtikel: Array<Artikel>) {
    this.istBelegt = istBelegt;
    this.gelagerteArtikel = gelagerteArtikel;
  }
}
