import { OtherDirectiveExempleComponent } from './components/other-directive-exemple/other-directive-exemple.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JokesComponent } from './components/jokes/jokes.component';
import { CustomDirectiveComponent } from './custom-directive.component';

const routes: Routes = [
  { path: '', component: CustomDirectiveComponent },
  { path: 'jokes', component: JokesComponent },
  { path: 'others', component: OtherDirectiveExempleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomDirectiveRoutingModule { }
