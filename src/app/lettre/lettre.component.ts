import { Component, Input, OnInit } from '@angular/core';
import {motService} from '../services/mot.service';
import {MessageService} from '../services/message.service';

@Component({
  selector: 'app-lettre',
  templateUrl: './lettre.component.html',
  styleUrls: ['./lettre.component.css']
})

export class LettreComponent implements OnInit {

  @Input() lettre: string;
  @Input() index: number;

  constructor(private motService: motService, private messageService: MessageService) { }

  ngOnInit() {
  }
  sendLettre(): void {
    // send message to subscribers via observable subject
    this.messageService.sendMessage(JSON.stringify({'lettre': this.lettre, 'index': this.index}));
  }

  getColor() {
    console.log(this.motService.tabLettreDejaCliquees.indexOf(this.lettre));
    if (this.motService.tabLettreDejaCliquees.indexOf(this.lettre) === -1) {
      return 'white';
    } else {
      return 'gray';
    }
  }

}
