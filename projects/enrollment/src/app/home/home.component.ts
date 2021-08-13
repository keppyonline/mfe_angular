import { Component, OnInit } from '@angular/core';
import { SharedSubjectService } from 'projects/host/src/app/services/shared-subject.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  InputList: Array<string> = [];
  constructor(private service: SharedSubjectService) {

    this.service.getValue().subscribe(data=>{
      this.InputList.push(data);
    })
   }

  ngOnInit(): void {
  }

}
