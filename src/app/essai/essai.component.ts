import { Component, OnInit } from '@angular/core';
import {MotService} from '../services/mot.service';
import {MessageService} from '../services/message.service';

@Component({
  selector: 'app-essai',
  templateUrl: './essai.component.html',
  styleUrls: ['./essai.component.css']
})
export class EssaiComponent implements OnInit {

  nbEssai: number;

  constructor(private motService: MotService, private messageService: MessageService) {
    this.messageService.nbEssai.subscribe((nbRecu) => {
      this.nbEssai = nbRecu;
    });
  }

  ngOnInit() {
    this.nbEssai = this.motService.nbEssaiMax;
  }

}
