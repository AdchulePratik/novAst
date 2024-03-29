import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';

const routes: Routes = [
  { path: 'reactiveForm', component: ReactiveformComponent },
  { path: 'templateDrivenForm', component: TemplatedrivenComponent },
  {path: 'loginSuccess', component: LoginsuccessComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularformsRoutingModule { }
