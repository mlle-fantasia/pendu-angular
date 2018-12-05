import { Component, Input, OnInit } from '@angular/core';
import {MessageService} from '../services/message.service';

@Component({
  selector: 'app-lettre-view',
  templateUrl: './lettre-view.component.html',
  styleUrls: ['./lettre-view.component.css']
})
export class LettreViewComponent implements OnInit {

  ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  @Input() partieFinie: boolean;

  constructor(private messageService: MessageService) {
    this.messageService.partieFinieOuiOuNon.subscribe((partieFinie) => {
      this.partieFinie = partieFinie;
    });
  }

  ngOnInit() {
  }

}
