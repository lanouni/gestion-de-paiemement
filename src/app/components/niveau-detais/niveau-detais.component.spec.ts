import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NiveauDetaisComponent } from './niveau-detais.component';

describe('NiveauDetaisComponent', () => {
  let component: NiveauDetaisComponent;
  let fixture: ComponentFixture<NiveauDetaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiveauDetaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiveauDetaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
