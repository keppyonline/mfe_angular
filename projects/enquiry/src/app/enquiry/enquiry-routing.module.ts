import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnquirySearchComponent } from './enquiry-search/enquiry-search.component';

const routes: Routes = [
  {
  path: '',
  component: EnquirySearchComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnquiryRoutingModule { }
