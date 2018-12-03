import { Injectable } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class motService {

  DICTIONNAIRE = ['anticonstitutionnelement', 'bonjour', 'cannes', 'Dormir', 'Effacer', 'Front', 'Grossir', 'Hache', 'Ivoir', 'Jardinier', 'Kayak', 'Lignage', 'Maman', 'Naviguer', 'Oppération', 'Pouvoir', 'Questions', 'Route', 'Scintillement', 'Tortues', 'Unité', 'Vivre', 'Waaaaaaouuu', 'Xd', 'Yaourt', 'Zincographie'];
  ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  tabLettreDejaCliquees = [];
  nbEssaiMax = 8 ;

  constructor() {}

  selectionMot() {
    let mot =  this.DICTIONNAIRE[Math.floor(this.DICTIONNAIRE.length * Math.random())];
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

  rendreLeMot(mot) {
    console.log(mot);
    let motCache = '';
    for (const lettre of mot) {
    motCache = motCache.concat('', this.tabLettreDejaCliquees.includes(lettre) ? lettre : ' __ ');
    }
    console.log(this.tabLettreDejaCliquees);
    console.log(motCache);
    return motCache;
  }

  ajouterAuTabDeLettreDejaCliquees(i: number) {
    this.tabLettreDejaCliquees.push(this.ALPHABET[i]);
    console.log(this.tabLettreDejaCliquees);
  }

  modifierNombreEssai() {
    this.nbEssaiMax--;
  }
}
