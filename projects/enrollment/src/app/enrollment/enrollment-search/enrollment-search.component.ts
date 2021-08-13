import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthLibService } from 'auth-lib';
import { SharedSubjectService } from 'projects/host/src/app/services/shared-subject.service';

@Component({
  selector: 'app-enrollment-search',
  templateUrl: './enrollment-search.component.html',
  styleUrls: ['./enrollment-search.component.css']
})
export class EnrollmentSearchComponent implements OnInit {

  user = this.authService.user;
  InputList: Array<string> = [];
  constructor(private authService: AuthLibService, private _sharedSubject: SharedSubjectService, private router: Router) {
    console.log(this.authService.user);
    this._sharedSubject.getValue().subscribe(o => {
      this.InputList.push(o);
    });
  }
   ngOnInit(): void {
   }
   onSubmit(input:string) {
     console.log('input');
     console.log(input);
     this._sharedSubject.setValue(input);
     // this.router.navigate(['/']);
   }

}
