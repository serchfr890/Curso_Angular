import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TabletColorsComponent } from './tablet-colors/tablet-colors.component';
// Aqui se definen todas las rutas de la aplicacion
const routes: Routes = [
  {
   path: 'login',
   component: LoginComponent
  },
  {
    path: 'colors',
    component: TabletColorsComponent
   },
   {
    path: '',
    component: LoginComponent
   },
   {
    path: '**',
    redirectTo: '/login'
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
