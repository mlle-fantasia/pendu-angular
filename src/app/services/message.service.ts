import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  Subject
} from 'rxjs';

@Injectable({ providedIn: 'root' })

export class MessageService {

  private subject = new Subject<any>();

  messageSource: BehaviorSubject<string> = new BehaviorSubject('');
  partieFinieOuiOuNon = new BehaviorSubject(false);
  nbEssai = new BehaviorSubject(0);
  partiCommenceeOuiNon = new BehaviorSubject(false);
  Mot: BehaviorSubject<string> = new BehaviorSubject('');

  constructor() { }

  communicationMot(leMot) {
        this.Mot.next(leMot);
  }

  communicationFinDePartie(partieFinie) {
    this.partieFinieOuiOuNon.next(partieFinie);
  }

  communicationDeputDePartie(partieCommencee) {
     this.partiCommenceeOuiNon.next(partieCommencee);
  }

  communicationNbEssai(nb) {
    this.nbEssai.next(nb);
  }

  sendMessage(message: string) {
    this.subject.next({ text: message });
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

}
