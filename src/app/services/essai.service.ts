import {motService} from './mot.service';
import {lettreService} from './lettre.service';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class essaiService {

  nbEssaiMax = 8 ;

  constructor(private motService: motService, private lettreService: lettreService) {}

  modifierNombreEssai(i: number) {
    const mot = this.motService.mot;
    for (let lettre of mot) {
      if (lettre === this.lettreService.ALPHABET[i]) {
        return;
      }
    }
    this.nbEssaiMax--;
  }

}
