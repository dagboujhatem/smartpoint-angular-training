import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttributeDirectiveComponent } from './attribute-directive.component';
import { NgClassExampleComponent } from './ng-class-example/ng-class-example.component';
import { NgModelExampleComponent } from './ng-model-example/ng-model-example.component';
import { NgStyleExampleComponent } from './ng-style-example/ng-style-example.component';

const routes: Routes = [
  { path: '', component: AttributeDirectiveComponent },
  { path: 'ng-model', component: NgModelExampleComponent },
  { path: 'ng-style', component: NgStyleExampleComponent },
  { path: 'ng-class', component: NgClassExampleComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttributeDirectiveRoutingModule { }
