import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginLayoutComponent } from './components/login-layout/login-layout.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [LoginLayoutComponent, MainLayoutComponent, FooterComponent, HeaderComponent]
})
export class LayoutModule { }
