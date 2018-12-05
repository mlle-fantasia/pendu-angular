import { Component, Input, OnInit } from '@angular/core';
import {MotService} from '../services/mot.service';
import {MessageService} from '../services/message.service';

@Component({
  selector: 'app-lettre',
  templateUrl: './lettre.component.html',
  styleUrls: ['./lettre.component.css']
})

export class LettreComponent implements OnInit {

  tableauDeLettreDejaCliqueeLettreConposant: any;
  @Input() lettre: string;
  @Input() index: number;

  constructor(private motService: MotService, private messageService: MessageService) {
    this.messageService.messageSource.subscribe((tableauRecu) => {
      this.tableauDeLettreDejaCliqueeLettreConposant = tableauRecu;
    });

  }

  ngOnInit() {
  }
  sendLettre(): void {
    // send message to subscribers via observable subject
    this.messageService.sendMessage(JSON.stringify({'lettre': this.lettre, 'index': this.index}));
  }

  getColor() {
    if (this.tableauDeLettreDejaCliqueeLettreConposant.indexOf(this.lettre) === -1) {
      return 'white';
    } else {
      return 'gray';
    }
  }

}
