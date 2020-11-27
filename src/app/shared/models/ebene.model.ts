import { Artikel } from './artikel.model';
import { Fach } from './fach.model';

export class Ebene {
  faecher: Array<Fach>;

  constructor(faecher: Array<Fach>) {
    this.faecher = faecher;
  }
}
