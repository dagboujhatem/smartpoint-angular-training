import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentCompteurComponent } from './parent-compteur.component';

describe('ParentCompteurComponent', () => {
  let component: ParentCompteurComponent;
  let fixture: ComponentFixture<ParentCompteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentCompteurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentCompteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
