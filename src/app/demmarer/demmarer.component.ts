import { Component, OnInit } from '@angular/core';
import {RedemarrerService} from '../services/redemarrerService';

@Component({
  selector: 'app-demmarer',
  templateUrl: './demmarer.component.html',
  styleUrls: ['./demmarer.component.css']
})
export class DemmarerComponent implements OnInit {

  texte: string;

  constructor(private RedemarrerService: RedemarrerService) { }

  ngOnInit() {
    this.texte = 'Lancer une nouvelle partie' ;
  }

  demmarer() {
    this.RedemarrerService.redemarrerMessage('redemarrer');
  }

}
