import { Component, OnInit } from '@angular/core';
import { AuthLibService } from 'auth-lib';
import { SharedSubjectService } from '../services/shared-subject.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user = this.authService.user;
  InputList: Array<string> = [];
  trackByIdentity = (index: number, item: any) => item;
  constructor(private sharedService: SharedSubjectService, private authService: AuthLibService) {
    console.log('read1 on ctor');
    this.sharedService.getValue()
      .subscribe(result => 
        console.log(result)
      );
   }

   trackByIdx(index: number, obj: any): any {
    return index;
  }


  ngOnInit(): void {}

}
