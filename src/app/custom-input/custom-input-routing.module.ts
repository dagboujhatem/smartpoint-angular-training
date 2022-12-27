import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomInputComponent } from './custom-input.component';

const routes: Routes = [{ path: '', component: CustomInputComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomInputRoutingModule { }
