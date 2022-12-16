import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongFormStructuralDirectivesComponent } from './long-form-structural-directives.component';

describe('LongFormStructuralDirectivesComponent', () => {
  let component: LongFormStructuralDirectivesComponent;
  let fixture: ComponentFixture<LongFormStructuralDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LongFormStructuralDirectivesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LongFormStructuralDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
