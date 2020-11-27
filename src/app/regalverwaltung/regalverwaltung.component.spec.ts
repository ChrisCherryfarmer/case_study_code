import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegalverwaltungComponent } from './regalverwaltung.component';

describe('RegalverwaltungComponent', () => {
  let component: RegalverwaltungComponent;
  let fixture: ComponentFixture<RegalverwaltungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegalverwaltungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegalverwaltungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
