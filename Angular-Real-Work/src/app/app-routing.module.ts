import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { PagenotfoundComponent } from './pagenotfound/pagenot.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: 'user',component: UserComponent},
  {path: 'databinding',component: DatabindingComponent},
  // {path: '***',component: PagenotfoundComponent}
  {path: 'homeModule-home',component: HomeComponent},
  {path: 'landing',component: LandingComponent},

  //Lazy Loading Concept
  {path: 'home-Module',loadChildren:()=>import('./home/home.module').then(mod=>mod.HomeModule)},
  {path: 'aboutus-Module',loadChildren:()=>import('./aboutus/aboutus.module').then(mod=>mod.AboutusModule)},
  {path: 'admin',loadChildren:()=>import('./admin/admin.module').then(mod=>mod.AdminModule)}
];

NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



