import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutuslandingComponent } from './aboutus/aboutuslanding/aboutuslanding.component';
import { ReactiveformComponent } from './angularforms/reactiveform/reactiveform.component';
import { ApplicationLandingComponent } from './application-landing/application-landing.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectivesComponent } from './directives/directives.component';
import { HomeComponent } from './home/home/home.component';
import { LandingComponent } from './home/landing/landing.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserComponent } from './user/user.component';
import { FormComponent } from './form/form.component';
import { AppLandingComponent } from './app-landing/app-landing.component';
import { LifeCycleParentComponent } from './life-cycle-parent/life-cycle-parent.component';
import { LifecyclesHooksComponent } from './lifecycles-hooks/lifecycles-hooks.component';
import { SubjectsComponent } from './subjects/subjects.component';


const routes: Routes = [
  { path: '', component: ApplicationLandingComponent },
  { path: 'user', component: UserComponent },
  { path: 'databinding', component: DatabindingComponent },
  { path: 'homeModule-home', component: HomeComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'aboutUslanding', component: AboutuslandingComponent },

  //{ path: 'aboutUsLanding', component :AboutuslandingComponent},dont do like this
  { path: 'directives', component: DirectivesComponent },
  { path: 'form', component: FormComponent },
  { path: 'reactiveForm', component: ReactiveformComponent },
  {path: 'appLanding' ,component: AppLandingComponent},
  { path: 'lifeCycleParent', component: LifeCycleParentComponent },
  { path: 'lifeCycleHooks', component: LifecyclesHooksComponent },
  {path: 'subject', component: SubjectsComponent},


  //Lazy Loading Concept

  { path: 'home-Module', loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule) },
  { path: 'aboutUs-Module', loadChildren: () => import('./aboutus/aboutus.module').then(mod => mod.AboutusModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'test', loadChildren: () => import('./test/test.module').then(mod => mod.TestModule) },
  { path: 'angularFormsModule', loadChildren: () => import('./angularforms/angularforms.module').then(m => m.AngularformsModule) },
  { path: '**', component: PagenotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



