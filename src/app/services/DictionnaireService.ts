import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  Subject
} from 'rxjs';
import {
  HttpClient,
  HttpResponse
} from '@angular/common/http';

@Injectable({ providedIn: 'root' })

export class DictionnaireService {

  DICTIONNAIRE ;

  constructor(private httpClient: HttpClient) { }

  async Dictionnaire() {
      await this.httpClient.get('http://localhost/data/dico.json').subscribe(
        (reponse) => {
        return new Promise( resolve =>{
        this.DICTIONNAIRE = reponse;
        console.log(this.DICTIONNAIRE);
    })},
      err => console.error(err),
      () => console.log('done loading mot')
    );
  }

}
