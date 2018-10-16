import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ToasterAppService } from './services/toaster-app.service';
import { LoggerService } from './services/logger.service';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  providers: [ToasterAppService, LoggerService],
  exports: [],
  declarations: [PageNotFoundComponent]
})
export class SharedModule { }
