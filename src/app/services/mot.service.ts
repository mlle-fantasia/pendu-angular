import { Injectable } from '@angular/core';
import {MessageService} from './message.service';
import { HttpClient } from '@angular/common/http';
import {DictionnaireService} from './DictionnaireService';

@Injectable({
  providedIn: 'root',
})

export class MotService {

  nbEssaiMax = 8;
  DICTIONNAIRE ;
  partieCommencee = false;
  mot ;

  constructor(private messageService: MessageService, private httpClient: HttpClient, private dictionnaireService: DictionnaireService) {

  }


  async Dictionnaire() {

    await this.httpClient.get('http://localhost/data/dico.json').subscribe(
  (reponse) => {
    return new Promise( resolve =>{

        this.messageService.communicationDeputDePartie(this.partieCommencee);
        this.DICTIONNAIRE = reponse;
        this.partieCommencee = true;
        this.messageService.communicationDeputDePartie(this.partieCommencee);
        console.log(this.partieCommencee);
        let mottmp = this.selectionMot();
      console.log(mottmp);
        return this.mot = mottmp;
    })},
      err => console.error(err),
      () => console.log('done loading mot')
    );
  }


  async selectionMot() {
    console.log(this.DICTIONNAIRE);
    if (this.DICTIONNAIRE.length > 0) {
      let mot = this.DICTIONNAIRE[Math.floor(this.DICTIONNAIRE.length * Math.random())];
      mot = this.formatMot(mot);
      console.log(mot);
      return mot;
    } else {
      console.log('je ne suis pas pret');
    }
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
    let i,
      x;
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
    console.log(mot);
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


  // Prend en paramètres l'URL cible et la fonction callback appelée en cas de succès
  ajaxGet(url, callback) {
    const req = new XMLHttpRequest();
    req.open('GET', url);
    req.addEventListener('load', function () {
      if (req.status >= 200 && req.status < 400) {
        // Appelle la fonction callback en lui passant la réponse de la requête
        callback(req.responseText);
      } else {
        console.error(req.status + ' ' + req.statusText + ' ' + url);
      }
    });
    req.addEventListener('error', function () {
      console.error('Erreur réseau avec l\'URL ' + url);
    });
    req.send(null);
  }


}
