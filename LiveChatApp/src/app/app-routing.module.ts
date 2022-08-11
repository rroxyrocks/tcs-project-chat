import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import {
  canActivate,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';
import { ProfileComponent } from './components/profile/profile.component';


//prevent unauthourized routing
const redirectToLogin = () => redirectUnauthorizedTo(['login']);
const redirectToHome = () => redirectLoggedInTo(['home'])

const routes: Routes = [
 //list of routes
{
  path:'',
  pathMatch: 'full',
  component: LoginComponent
},
{
  path:'login',
  component: LandingComponent,
  ...canActivate(redirectToHome)// routing guard
},
{
  path:'signup',
  component: SignUpComponent,
  ...canActivate(redirectToHome)// routing guard
},
{
  path:'home',
  component: HomeComponent,
  ...canActivate(redirectToLogin)// routing guard
},
{
  path:'profile',
 component: ProfileComponent,
 ...canActivate(redirectToLogin)// routing guard
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
