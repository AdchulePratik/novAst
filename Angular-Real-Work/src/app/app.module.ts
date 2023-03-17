import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule } from '@angular/forms';
import { PagenotfoundComponent } from './pagenotfound/pagenot.component';
import { HomeRoutingModule } from './landing/home-routing.module';
import { ContactusModule } from './contactus/contactus.module';
import { ApplicationLandingComponent } from './application-landing/application-landing.component';
import { HeaderComponent } from './header/header.component';
import { ImageComponent } from './image/image.component';


@NgModule({
  declarations: [ //compo + dir + pipes
    AppComponent,
    UserComponent,
    DatabindingComponent,
    PagenotfoundComponent,
    ApplicationLandingComponent,
    HeaderComponent,
    ImageComponent,
    
  ],
  imports: [ //modules
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    //HomeModule
    //ContactusModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
