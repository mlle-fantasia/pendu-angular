import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MotService } from '../services/mot.service';
import {Subscription} from 'rxjs';
import {MessageService} from '../services/message.service';
import {RedemarrerService} from '../services/redemarrerService';

@Component({
  selector: 'app-mot',
  templateUrl: './mot.component.html',
  styleUrls: ['./mot.component.css']
})
export class MotComponent implements OnInit, OnDestroy {

  DICTIONNAIRE = ['anticonstitutionnelement', 'bonjour', 'cannes', 'Dormir', 'Effacer', 'Front', 'Grossir', 'Hache', 'Ivoir', 'Jardinier', 'Kayak', 'Lignage', 'Maman', 'Naviguer', 'Oppération', 'Pouvoir', 'Questions', 'Route', 'Scintillement', 'Tortues', 'Unité', 'Vivre', 'Waaaaaaouuu', 'Xd', 'Yaourt', 'Zincographie'];
  tabLettreDejaCliquees = [];
  @Input() partieFinie: boolean;
  @Input() mot: any;
  @Input() motCache: any;
  subscription: Subscription;


  constructor(private messageService: MessageService, private motService: MotService, private redemarrerService: RedemarrerService) {
    // subscribe to home component messages
    this.subscription = this.messageService.getMessage().subscribe(message => {
      const reponse = JSON.parse(message.text);
      this.motService.ajouterAuTabDeLettreDejaCliquees(reponse.lettre, this.tabLettreDejaCliquees);
      this.testerLaLettre();
      this.finDePartieAffichageGagneOuPerdu();
    });
    this.subscription = this.redemarrerService.getDemarrerMessage().subscribe(message => {
        this.nouvellePartie();
    });
  }

  ngOnInit() {
    this.nouvellePartie();
  }

  nouvellePartie() {
    this.tabLettreDejaCliquees = [];
    this.mot = this.motService.selectionMot(this.DICTIONNAIRE);
    this.motCache = this.motService.rendreLeMot(this.mot, this.tabLettreDejaCliquees);
    this.partieFinie = false ;
    this.messageService.communicationFinDePartie(this.partieFinie);
    this.motService.envoieDuTableauDeLettreDejaCliquee(this.tabLettreDejaCliquees);
    this.motService.reinitialiserNbEssai();
  }

  // Doit récupérer un event générer par le component  lettreComponent lors du click sur le bouton.
  testerLaLettre() {
    const motCacheActuel = this.motCache;
    this.motCache = this.motService.rendreLeMot(this.mot, this.tabLettreDejaCliquees);

    if (this.motCache === motCacheActuel) {
      this.motService.modifierNombreEssai();
    }
  }

  finDePartieAffichageGagneOuPerdu() {
    if (this.motCache === this.mot) {
      this.partieFinie = true ;
      this.messageService.communicationFinDePartie(this.partieFinie);
      this.motCache = 'GAGNE !!!';
    } else if (this.motService.nbEssaiMax === 0) {
      this.partieFinie = true ;
      this.messageService.communicationFinDePartie(this.partieFinie);
      this.motCache = 'PERDU !!!';
    }
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
