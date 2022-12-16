import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgForExampleComponent } from './ng-for-example/ng-for-example.component';
import { NgIfExampleComponent } from './ng-if-example/ng-if-example.component';
import { NgSwitchExampleComponent } from './ng-switch-example/ng-switch-example.component';
import { StructuralDirectiveComponent } from './structural-directive.component';

const routes: Routes = [
  { path: '', component: StructuralDirectiveComponent },
  { path: 'ng-for', component: NgForExampleComponent },
  { path: 'ng-if', component: NgIfExampleComponent },
  { path: 'ng-switch', component: NgSwitchExampleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StructuralDirectiveRoutingModule { }
