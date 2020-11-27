export class Artikel {
  artikelnummer: string;
  name: string;
  beschreibung: string;

  constructor(artikelnummer: string, name: string, beschreibung: string) {
    this.beschreibung = beschreibung;
    this.name = name;
    this.artikelnummer = artikelnummer;
  }
}
