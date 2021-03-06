import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({ providedIn: 'root' })

export class DictionnaireService {

  private UrlDico = 'https://penduapi.marinafront.fr/';

  constructor(private httpClient: HttpClient) { }

     Dictionnaire(): Promise<object> {
         return this.httpClient.get(this.UrlDico).toPromise();
     }

}
