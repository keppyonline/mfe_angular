import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnrollmentRoutingModule } from './enrollment-routing.module';
import { SharedSubjectService } from 'projects/host/src/app/services/shared-subject.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EnrollmentRoutingModule
  ],
  providers: [],
})
export class EnrollmentModule { }
