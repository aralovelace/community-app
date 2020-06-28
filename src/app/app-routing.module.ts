import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './User/login/login.component';
import {RegisterComponent} from './User/register/register.component';
import {UserComponent} from './User/user/user.component';
import { AuthGuard} from './Core/auth.guard';
import {UserResolver} from './User/user/user.resolver';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
  { path: 'user', component: UserComponent, resolve: {data: UserResolver}}

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
