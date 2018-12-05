import { Injectable } from '@angular/core';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root',
})

export class MotService {

  nbEssaiMax = 8 ;

  constructor(private messageService: MessageService) {}

  selectionMot(dico) {
    let mot =  dico[Math.floor(dico.length * Math.random())];
    mot = this.formatMot(mot);
    console.log(mot);
    return mot;
  }

  formatMot(mot) {
    return this
      .removeAccents(mot)
      .toUpperCase();
  }

  removeAccents(str) {
    const accents = ['À', 'Á', 'Â', 'Ã', 'Ä', 'Å', 'à', 'á', 'â', 'ã', 'ä', 'å', 'Ò', 'Ó', 'Ô', 'Õ', 'Õ', 'Ö', 'Ø', 'ò', 'ó', 'ô', 'õ', 'ö', 'ø', 'È', 'É', 'Ê', 'Ë', 'è', 'é', 'ê', 'ë', 'ð', 'Ç', 'ç', 'Ð', 'Ì', 'Í', 'Î', 'Ï', 'ì', 'í', 'î', 'ï', 'Ù', 'Ú', 'Û', 'Ü', 'ù', 'ú', 'û', 'ü', 'Ñ', 'ñ', 'Š', 'š', 'Ÿ', 'ÿ', 'ý', 'Ž', 'ž'];
    const accentsOut = ['A', 'A', 'A', 'A', 'A', 'A', 'a', 'a', 'a', 'a', 'a', 'a', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'o', 'o', 'o', 'o', 'o', 'o', 'E', 'E', 'E', 'E', 'e', 'e', 'e', 'e', 'e', 'C', 'c', 'D', 'I', 'I', 'I', 'I', 'i', 'i', 'i', 'i', 'U', 'U', 'U', 'U', 'u', 'u', 'u', 'u', 'N', 'n', 'S', 's', 'Y', 'y', 'y', 'Z', 'z'];
    str = str.split('');
    const strLen = str.length;
    let i, x;
    for (i = 0; i < strLen; i++) {
      x = accents.indexOf(str[i]);
      if (x !== -1) {
        str[i] = accentsOut[x];
      }
    }
    return str.join('');
  }

  rendreLeMot(mot, tableauDeLettre) {
    let motCache = '';
    for (const lettre of mot) {
    motCache = motCache.concat('', tableauDeLettre.includes(lettre) ? lettre : ' __ ');
    }
    console.log(tableauDeLettre);
    console.log(motCache);
    return motCache;
  }

  ajouterAuTabDeLettreDejaCliquees(lettre, tableauDeLettre) {
    tableauDeLettre.push(lettre);
    console.log(tableauDeLettre);
    this.envoieDuTableauDeLettreDejaCliquee(tableauDeLettre);
    return tableauDeLettre;
  }

  envoieDuTableauDeLettreDejaCliquee(tableauDeLettre) {
    this.messageService.messageSource.next(tableauDeLettre);
  }


  modifierNombreEssai() {
    this.nbEssaiMax--;
    this.envoieDuNombreEssai();
  }

  reinitialiserNbEssai() {
    this.nbEssaiMax = 8;
    this.envoieDuNombreEssai();
  }
  envoieDuNombreEssai() {
    this.messageService.communicationNbEssai(this.nbEssaiMax);
  }

}
