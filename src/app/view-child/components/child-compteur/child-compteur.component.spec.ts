import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildCompteurComponent } from './child-compteur.component';

describe('ChildCompteurComponent', () => {
  let component: ChildCompteurComponent;
  let fixture: ComponentFixture<ChildCompteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildCompteurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildCompteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
