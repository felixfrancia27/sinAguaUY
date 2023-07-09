import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrincipalComponent } from './principal/principal.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'principal',
    component: PrincipalComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
