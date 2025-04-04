import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from './components/layout/login/login.module';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./components/layout/login/login.module').then(m => m.LoginModule) },
  { path: '**', redirectTo: 'login' } // Redirect unknown routes to login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
