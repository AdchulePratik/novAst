import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationLandingComponent } from './application-landing/application-landing.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { PagenotfoundComponent } from './pagenotfound/pagenot.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: '',component: ApplicationLandingComponent},
  { path: 'user', component: UserComponent },
  { path: 'databinding', component: DatabindingComponent },
  // {path: '***',component: PagenotfoundComponent}
  { path: 'homeModule-home', component: HomeComponent },
  { path: 'landing', component: LandingComponent },

  //Lazy Loading Concept

  { path : 'home-Module', loadChildren : () => import('./home/home.module').then(mod => mod.HomeModule)},
  { path : 'aboutUs-Module', loadChildren:()=>import('./aboutus/aboutus.module').then(mod => mod.AboutusModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'test' , loadChildren:()=> import('./test/test.module').then(mod => mod.TestModule)  },
 

  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



