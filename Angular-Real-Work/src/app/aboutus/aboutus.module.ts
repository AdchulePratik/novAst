import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutusRoutingModule } from './aboutus-routing.module';
import { AboutuslandingComponent } from './aboutuslanding/aboutuslanding.component';
import { AboutusdetailsComponent } from './aboutusdetails/aboutusdetails.component';
import { TestComponent } from './test/test/test.component';

console.log('about us module.....');

@NgModule({
  declarations: [
    AboutuslandingComponent,
    AboutusdetailsComponent,
    TestComponent
  ],
  imports: [
    CommonModule,
    AboutusRoutingModule
  ]
})
export class AboutusModule { }
