import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomInputRoutingModule } from './custom-input-routing.module';
import { CustomInputComponent } from './custom-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';


@NgModule({
  declarations: [
    CustomInputComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    CustomInputRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CustomInputModule { }
