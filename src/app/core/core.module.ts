import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthGuard } from './guards/auth.guard';
import { AuthenticationService } from './services/authentication.service';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],
  providers: [AuthGuard, AuthenticationService]
})
export class CoreModule { }

