import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDirectiveRoutingModule } from './custom-directive-routing.module';
import { CustomDirectiveComponent } from './custom-directive.component';
import { JokesComponent } from './components/jokes/jokes.component';
import { CardHoverDirective } from './directives/card-hover.directive';
import { OtherDirectiveExempleComponent } from './components/other-directive-exemple/other-directive-exemple.component';
import { TtClassDirective } from './directives/tt-class.directive';
import { TtIfDirective } from './directives/tt-if.directive';
import { ToggleDirective } from './directives/toggle.directive';
import { ToolTipDirective } from './directives/tooltip.directive';


@NgModule({
  declarations: [
    CustomDirectiveComponent,
    JokesComponent,
    CardHoverDirective,
    OtherDirectiveExempleComponent,
    TtClassDirective,
    TtIfDirective,
    ToggleDirective,
    ToolTipDirective
  ],
  imports: [
    CommonModule,
    CustomDirectiveRoutingModule,
    FormsModule
  ]
})
export class CustomDirectiveModule { }
