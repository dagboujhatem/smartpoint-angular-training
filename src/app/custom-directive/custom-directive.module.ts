import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomDirectiveRoutingModule } from './custom-directive-routing.module';
import { CustomDirectiveComponent } from './custom-directive.component';
import { JokesComponent } from './components/jokes/jokes.component';
import { CardHoverDirective } from './directives/card-hover.directive';


@NgModule({
  declarations: [
    CustomDirectiveComponent,
    JokesComponent,
    CardHoverDirective
  ],
  imports: [
    CommonModule,
    CustomDirectiveRoutingModule
  ]
})
export class CustomDirectiveModule { }
