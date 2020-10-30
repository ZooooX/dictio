import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { WordComponent } from './components/word/word.component';
import { WordlistComponent } from './components/wordlist/wordlist.component';


const routes: Routes = [
  {
    path : "",
    redirectTo :'/home',
    pathMatch : 'full'
  },
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path : 'signin',
    component : SigninComponent
  },
  {
    path : 'signup',
    component : SignupComponent
  },
  { 
    path : 'words/:search',
    component : WordlistComponent
  },
  {
    path : 'word/:word',
    component : WordComponent
  },
  {
    path : "**",
    component : Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
