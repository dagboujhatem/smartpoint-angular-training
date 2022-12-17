import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewChildRoutingModule } from './view-child-routing.module';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './components/parent/parent.component';

@NgModule({
  declarations: [
    ChildComponent,
    ParentComponent
  ],
  imports: [
    CommonModule,
    ViewChildRoutingModule
  ]
})
export class ViewChildModule { }
