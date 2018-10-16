import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from '../../shared/components/home/home.component';
import { SignupComponent } from './signup/signup.component';
import { PostJobComponent } from '../../shared/components/post-job/post-job.component';
import { NotFoundComponent } from '../../shared/components/not-found/not-found.component';
const appRoutes: Routes = [

  { path: 'signup', component: SignupComponent, data: { title: 'Signup' } },
  { path: 'home', component: HomeComponent, data: { title: 'Home' } },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'post-job', component: PostJobComponent, data: { title: 'Post Job' } },
  { path: 'login', component: LoginComponent, data: { title: 'Login' } },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  declarations: [],

  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    // other imports here
  ],
  exports: [RouterModule],
})

export class AppRoutingModule { }
