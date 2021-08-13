import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';
import { EnrollmentSearchComponent } from './enrollment-search/enrollment-search.component';

const routes: Routes = [
  {
  path: '',
  component: EnrollmentSearchComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnrollmentRoutingModule { }
