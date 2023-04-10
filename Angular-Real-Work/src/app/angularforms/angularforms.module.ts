import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularformsRoutingModule } from './angularforms-routing.module';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { ShareModule } from '../shared/shared.module';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';


@NgModule({

  declarations: [

    ReactiveformComponent,
    TemplatedrivenComponent,
    LoginsuccessComponent,

  ],
  imports: [
    CommonModule,
    // BrowserModule
    AngularformsRoutingModule,
    ShareModule,
    FormsModule,
    ReactiveFormsModule

  ]
    // exports:[
  //   ReactiveformComponent,
  // ]

  //bootstrap: [ReactiveformComponent]
})
export class AngularformsModule { }