import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StructuralDirectiveRoutingModule } from './structural-directive-routing.module';
import { StructuralDirectiveComponent } from './structural-directive.component';
import { LongFormStructuralDirectivesComponent } from './long-form-structural-directives/long-form-structural-directives.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StructuralDirectiveComponent,
    LongFormStructuralDirectivesComponent
  ],
  imports: [
    CommonModule,
    StructuralDirectiveRoutingModule,
    FormsModule
  ]
})
export class StructuralDirectiveModule { }
