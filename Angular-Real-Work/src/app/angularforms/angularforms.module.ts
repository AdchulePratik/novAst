import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularformsRoutingModule } from './angularforms-routing.module';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { NumbersOnlyDirective } from './numbers-only.directive';
import { ShareModule } from '../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({

  declarations: [

    ReactiveformComponent,
    TemplatedrivenComponent

  ],
  imports: [
    CommonModule,
    // BrowserModule
    AngularformsRoutingModule,
    ShareModule

  ]
    // exports:[
  //   ReactiveformComponent,
  // ]

  //bootstrap: [ReactiveformComponent]
})
export class AngularformsModule { }
