import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomInputRoutingModule } from './custom-input-routing.module';
import { CustomInputComponent } from './custom-input.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CustomInputComponent
  ],
  imports: [
    CommonModule,
    CustomInputRoutingModule,
    ReactiveFormsModule
  ]
})
export class CustomInputModule { }
