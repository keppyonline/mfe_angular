import { Injectable } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SharedSubjectService {
   SharingData: Subject<string> = new Subject<string> ();
  constructor() { }
  public setValue(value: string): void {
    console.log('service');
    console.log(value);
    this.SharingData.next(value);
}

public getValue(): Observable <string> {
    return this.SharingData;
}
}