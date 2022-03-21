import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiementListeComponent } from './paiement-liste.component';

describe('PaiementListeComponent', () => {
  let component: PaiementListeComponent;
  let fixture: ComponentFixture<PaiementListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaiementListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaiementListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
