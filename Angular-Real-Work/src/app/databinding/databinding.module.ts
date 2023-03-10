import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatabindingRoutingModule } from './databinding-routing.module';
import { DatabindingComponent } from './databinding.component';


@NgModule({
  declarations: [
    DatabindingComponent
  ],
  imports: [
    CommonModule,
    DatabindingRoutingModule
  ]
})
export class DatabindingModule { }
