import { TestBed } from '@angular/core/testing';

import { ArtikelverwaltungService } from './artikelverwaltung.service';

describe('ArtikelverwaltungService', () => {
  let service: ArtikelverwaltungService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtikelverwaltungService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
