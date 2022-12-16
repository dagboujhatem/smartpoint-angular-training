import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StructuralDirectiveRoutingModule } from './structural-directive-routing.module';
import { StructuralDirectiveComponent } from './structural-directive.component';


@NgModule({
  declarations: [
    StructuralDirectiveComponent
  ],
  imports: [
    CommonModule,
    StructuralDirectiveRoutingModule
  ]
})
export class StructuralDirectiveModule { }
