import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularformsRoutingModule } from './angularforms-routing.module';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { ShareModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({

  declarations: [

    ReactiveformComponent,
    TemplatedrivenComponent

  ],
  imports: [
    CommonModule,
    // BrowserModule
    AngularformsRoutingModule,
    ShareModule,
    FormsModule

  ]
    // exports:[
  //   ReactiveformComponent,
  // ]

  //bootstrap: [ReactiveformComponent]
})
export class AngularformsModule { }
