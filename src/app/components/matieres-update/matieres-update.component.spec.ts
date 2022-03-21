import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatieresUpdateComponent } from './matieres-update.component';

describe('MatieresUpdateComponent', () => {
  let component: MatieresUpdateComponent;
  let fixture: ComponentFixture<MatieresUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatieresUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatieresUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
