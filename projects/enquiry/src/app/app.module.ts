import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedSubjectService } from 'projects/host/src/app/services/shared-subject.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnquirySearchComponent } from './enquiry/enquiry-search/enquiry-search.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EnquirySearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
