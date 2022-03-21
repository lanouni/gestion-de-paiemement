import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutNiveauComponent } from './ajout-niveau.component';

describe('AjoutNiveauComponent', () => {
  let component: AjoutNiveauComponent;
  let fixture: ComponentFixture<AjoutNiveauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutNiveauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutNiveauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
