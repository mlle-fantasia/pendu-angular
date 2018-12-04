import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RedemarrerService {
  private subject = new Subject<any>();

  redemarrerMessage(message: string) {
    this.subject.next({ text: message });
  }

  getDemarrerMessage(): Observable<any> {
    return this.subject.asObservable();
  }

}
