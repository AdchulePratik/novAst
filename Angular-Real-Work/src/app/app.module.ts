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
import { AppLandingComponent } from './app-landing/app-landing.component';
import { LifeCycleParentComponent } from './life-cycle-parent/life-cycle-parent.component';
import { LifecyclesHooksComponent } from './lifecycles-hooks/lifecycles-hooks.component';
import { SubjectOneComponent } from './subject-one/subject-one.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';






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
    AppLandingComponent,
    LifeCycleParentComponent,
    LifecyclesHooksComponent,
    SubjectOneComponent,
    SubjectsComponent,



  ],
  imports: [ //modules
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ShareModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // AngularformsModule
    // HomeModule,
    // ContactusModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
