import { Component, OnDestroy, OnInit } from '@angular/core';
import { motService } from '../services/mot.service';
import {Subscription} from 'rxjs';
import {MessageService} from '../services/message.service';

@Component({
  selector: 'app-mot',
  templateUrl: './mot.component.html',
  styleUrls: ['./mot.component.css']
})
export class MotComponent implements OnInit, OnDestroy {

  mot: any;
  motCache: any;
  nombreTentative = 0;
  subscription: Subscription;

  constructor(private messageService: MessageService, private motService: motService) {
    // subscribe to home component messages
    this.subscription = this.messageService.getMessage().subscribe(message => {
      let reponse = JSON.parse(message.text);
      console.log(reponse.index);
      this.motService.ajouterAuTabDeLettreDejaCliquees(reponse.index);
      this.testerLaLettre();
    });
  }

  ngOnInit() {
    this.nouvellePartie();
  }

  nouvellePartie() {
    this.mot = this.motService.selectionMot();
    this.motCache = this.motService.rendreLeMot(this.mot);
    this.nombreTentative = 0;
  }

  // Doit récupérer un event générer par le component  lettreComponent lors du click sur le bouton.
  testerLaLettre() {
    const motCacheActuel = this.motCache;
    this.motCache = this.motService.rendreLeMot(this.mot);

    if (this.motCache === motCacheActuel) {
      this.motService.modifierNombreEssai();
    }

  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
