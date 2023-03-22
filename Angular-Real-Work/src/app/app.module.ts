import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule } from '@angular/forms';
// import { HomeModule } from './landing/home.module';
// import { ContactusModule } from './contactus/contactus.module';
import { ApplicationLandingComponent } from './application-landing/application-landing.component';
import { HeaderComponent } from './header/header.component';
import { DirectivesComponent } from './directives/directives.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FormComponent } from './form/form.component';
// import { CharactersonlyDirective } from './charactersonly.directive';
import { SearchtextPipe } from './searchtext.pipe';
// import { CurrencyPipe1 } from './currency.pipe';
// import { ReactiveformComponent } from './angularforms/reactiveform/reactiveform.component';
// import { TemplatedrivenComponent } from './angularforms/reactiveform/templatedriven/templatedriven.component';
// import { NumbersOnlyDirective } from './numbers-only.directive';
import { ShareModule } from './shared/shared.module';






@NgModule({
  declarations: [ //compo + dir + pipes
    AppComponent,
    UserComponent,
    DatabindingComponent,
    PagenotfoundComponent,
    ApplicationLandingComponent,
    HeaderComponent,
    DirectivesComponent,
    FormComponent,
    SearchtextPipe,



  ],
  imports: [ //modules
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ShareModule,
    // AngularformsModule
    // HomeModule,
    // ContactusModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
