import { Component, Input, OnInit } from '@angular/core';
import {lettreService} from '../services/lettre.service';
import {motService} from '../services/mot.service';

@Component({
  selector: 'app-lettre',
  templateUrl: './lettre.component.html',
  styleUrls: ['./lettre.component.css']
})
export class LettreComponent implements OnInit {

  @Input()lettre: string;
  @Input() index: number;



  constructor(private lettreService: lettreService, private motService: motService) { }

  ngOnInit() {
  }

  testerLettre(){
    this.lettreService.ajouterAuTabDeLettreDejaCliquees(this.index);
    this.motService.testerLeMot(this.motService.mot);
  }

  getColor() {
    console.log(this.lettreService.tabLettreDejaCliquees.indexOf(this.lettre));
    if (this.lettreService.tabLettreDejaCliquees.indexOf(this.lettre) === -1) {
      return 'white';
    } else {
      return 'gray';
    }
  }

}
