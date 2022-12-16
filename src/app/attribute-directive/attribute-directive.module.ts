import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttributeDirectiveRoutingModule } from './attribute-directive-routing.module';
import { AttributeDirectiveComponent } from './attribute-directive.component';
import { NgModelExampleComponent } from './ng-model-example/ng-model-example.component';
import { NgClassExampleComponent } from './ng-class-example/ng-class-example.component';
import { NgStyleExampleComponent } from './ng-style-example/ng-style-example.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AttributeDirectiveComponent,
    NgModelExampleComponent,
    NgClassExampleComponent,
    NgStyleExampleComponent
  ],
  imports: [
    CommonModule,
    AttributeDirectiveRoutingModule,
    FormsModule,
  ]
})
export class AttributeDirectiveModule { }
