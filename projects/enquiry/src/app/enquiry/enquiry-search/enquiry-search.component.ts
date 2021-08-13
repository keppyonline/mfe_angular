import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SharedSubjectService } from 'projects/host/src/app/services/shared-subject.service';

@Component({
  selector: 'app-enquiry-search',
  templateUrl: './enquiry-search.component.html',
  styleUrls: ['./enquiry-search.component.css']
})
export class EnquirySearchComponent implements OnInit {

  InputList: Array<string> = [];
  trackByIdentity = (index: number, item: any) => item;

  constructor(private _sharedSubject: SharedSubjectService) {
    this._sharedSubject.getValue().subscribe(o => {
      console.log('trigger enquiry search ctor');
      console.log(o);
      this.InputList.push(o);
    });
  }

  trackByIdx(index: number, obj: any): any {
    return index;
  }

  clearList() {
    this.InputList = [];
  }

  ngOnInit(): void {
  }

  onSubmit(input:string) {
    this._sharedSubject.setValue(input);
    input = '';
  }

}
