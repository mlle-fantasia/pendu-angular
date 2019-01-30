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
import {MessageService} from './message.service';

@Injectable({ providedIn: 'root' })

export class DictionnaireService {

  private UrlDico = 'http://localhost:5001/';


  constructor(private httpClient: HttpClient) { }


    async Dictionnaire(): Promise<object> {
       const reponse = await this.httpClient.get(this.UrlDico).toPromise();
       return reponse;
    }



}
