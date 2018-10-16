import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';


import { AppComponent } from './app.component';
import { LoginComponent } from './features/auth/login/login.component';
import { AppRoutingModule } from './features/auth/app-routing.module';
import { HomeComponent } from './shared/components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppMaterialModule } from './features/app-material/app-material.module';
import { SignupComponent } from './features/auth/signup/signup.component';
import { PostJobComponent } from './shared/components/post-job/post-job.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    PostJobComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, BrowserAnimationsModule, AppMaterialModule,
    FormsModule, ReactiveFormsModule, LayoutModule, MatToolbarModule, MatButtonModule, MatSidenavModule,
    MatIconModule, MatListModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
