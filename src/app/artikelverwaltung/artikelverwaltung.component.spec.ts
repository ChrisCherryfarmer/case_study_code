import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtikelverwaltungComponent } from './artikelverwaltung.component';

describe('ArtikelverwaltungComponent', () => {
  let component: ArtikelverwaltungComponent;
  let fixture: ComponentFixture<ArtikelverwaltungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtikelverwaltungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtikelverwaltungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
