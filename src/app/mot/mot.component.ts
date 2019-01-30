import {
  Component,
  Input,
  OnDestroy,
  OnInit
} from '@angular/core';
import {MotService} from '../services/mot.service';
import {Subscription} from 'rxjs';
import {MessageService} from '../services/message.service';
import {RedemarrerService} from '../services/redemarrerService';
import {DictionnaireService} from '../services/DictionnaireService';


@Component({
  selector: 'app-mot',
  templateUrl: './mot.component.html',
  styleUrls: ['./mot.component.css']
})
export class MotComponent implements OnInit, OnDestroy {

  tabLettreDejaCliquees = [];
  @Input() partieCommencee: boolean;
  @Input() partieFinie: boolean;
  @Input() partieGagnee: boolean;
  @Input() mot;
  @Input() motCache: any;
  subscription: Subscription;


  constructor(private messageService: MessageService, private motService: MotService, private redemarrerService: RedemarrerService, private dicoService: DictionnaireService) {
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
      // this.dicoService.getMotView().subscribe(mot => {
      //     this.mot = mot['mot'];
      // });
  }

     async ngOnInit() {
        await this.getMot().then(
            (reponse) => {
              this.mot = this.motService.formatMot(reponse.mot);
              this.nouvellePartie();
            }
        );
    }

    async getMot() {
        return await this.dicoService.Dictionnaire();
    }

   nouvellePartie() {
    this.tabLettreDejaCliquees = [];
    console.log(this.mot);
    this.motCache = this.motService.rendreLeMot(this.mot, this.tabLettreDejaCliquees);
    this.partieFinie = false;
    this.messageService.communicationFinDePartie(this.partieFinie);
    this.motService.envoieDuTableauDeLettreDejaCliquee(this.tabLettreDejaCliquees);
    this.motService.reinitialiserNbEssai();

  }

  // Doit récupérer un event générer par le component  lettreComponent lors du click sur le bouton.
  testerLaLettre() {
    const motCacheActuel = this.motCache;
      console.log(this.mot);
    this.motCache = this.motService.rendreLeMot(this.mot, this.tabLettreDejaCliquees);
      console.log(this.motCache);
    if (this.motCache === motCacheActuel) {
      this.motService.modifierNombreEssai();
    }
  }

  finDePartieAffichageGagneOuPerdu() {
    if (this.motCache === this.mot) {
      this.partieFinie = true;
      this.partieGagnee = true;
      this.messageService.communicationFinDePartie(this.partieFinie);
      this.motCache = 'GAGNE !!!';
    } else if (this.motService.nbEssaiMax === 0) {
      this.partieFinie = true;
      this.partieGagnee = false;
      this.messageService.communicationFinDePartie(this.partieFinie);
      this.motCache = 'PERDU !!!';
    }
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
