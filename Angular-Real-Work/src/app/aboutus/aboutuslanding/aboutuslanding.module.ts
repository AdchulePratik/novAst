import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutuslandingRoutingModule } from './aboutuslanding-routing.module';
import { AboutuslandingComponent } from './aboutuslanding.component';


@NgModule({
  declarations: [
    AboutuslandingComponent
  ],
  imports: [
    CommonModule,
    AboutuslandingRoutingModule
  ]
})
export class AboutuslandingModule { }
