import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomDirectiveRoutingModule } from './custom-directive-routing.module';
import { CustomDirectiveComponent } from './custom-directive.component';
import { JokesComponent } from './components/jokes/jokes.component';
import { CardHoverDirective } from './directives/card-hover.directive';
import { OtherDirectiveExempleComponent } from './components/other-directive-exemple/other-directive-exemple.component';


@NgModule({
  declarations: [
    CustomDirectiveComponent,
    JokesComponent,
    CardHoverDirective,
    OtherDirectiveExempleComponent
  ],
  imports: [
    CommonModule,
    CustomDirectiveRoutingModule
  ]
})
export class CustomDirectiveModule { }
