import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import {motService} from './services/mot.service';
import {MessageService} from './services/message.service';
import {Subscription} from 'rxjs';
import {RedemarrerService} from './services/redemarrerService';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Pendu with Angular 6';

  ALPHABET: any[];
  aGagne: boolean;
  mot: any;
  motCache: any;
  subscription: Subscription;

  constructor(private messageService: MessageService, private motService: motService, private redemarrerService: RedemarrerService) {
    // subscribe to home component messages
    this.subscription = this.messageService.getMessage().subscribe(message => {
      let reponse = JSON.parse(message.text);
      console.log(reponse.index);
      this.motService.ajouterAuTabDeLettreDejaCliquees(reponse.index);
      this.testerLaLettre();
      this.finDePartieAffichageGagneOuPerdu();
    });
    this.subscription = this.redemarrerService.getDemarrerMessage().subscribe(message => {
      this.nouvellePartie();
    });
  }

  ngOnInit() {
    this.ALPHABET = this.motService.ALPHABET;
    this.aGagne = this.motService.aGagne;
    this.nouvellePartie();
  }
  nouvellePartie() {
    this.motService.tabLettreDejaCliquees = [];
    this.mot = this.motService.selectionMot();
    this.motCache = this.motService.rendreLeMot(this.mot);
    this.aGagne = false ;
  }

  // Doit récupérer un event générer par le component  lettreComponent lors du click sur le bouton.
  testerLaLettre() {
    const motCacheActuel = this.motCache;
    this.motCache = this.motService.rendreLeMot(this.mot);

    if (this.motCache === motCacheActuel) {
      this.motService.modifierNombreEssai();
    }
  }

  finDePartieAffichageGagneOuPerdu() {
    if (this.motCache === this.mot) {
      this.aGagne = true ;
      this.motCache = 'GAGNE !!!';
    } else if (this.motService.nbEssaiMax === 0) {
      this.aGagne = true ;
      this.motCache = 'PERDU !!!';
    }
  }


  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
