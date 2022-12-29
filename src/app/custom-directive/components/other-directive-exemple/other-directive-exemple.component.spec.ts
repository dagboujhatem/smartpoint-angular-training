import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherDirectiveExempleComponent } from './other-directive-exemple.component';

describe('OtherDirectiveExempleComponent', () => {
  let component: OtherDirectiveExempleComponent;
  let fixture: ComponentFixture<OtherDirectiveExempleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherDirectiveExempleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherDirectiveExempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
