import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewChildRoutingModule } from './view-child-routing.module';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './components/parent/parent.component';
import { ParentCompteurComponent } from './components/parent-compteur/parent-compteur.component';
import { ChildCompteurComponent } from './components/child-compteur/child-compteur.component';

@NgModule({
  declarations: [
    ChildComponent,
    ParentComponent,
    ParentCompteurComponent,
    ChildCompteurComponent
  ],
  imports: [
    CommonModule,
    ViewChildRoutingModule
  ]
})
export class ViewChildModule { }
