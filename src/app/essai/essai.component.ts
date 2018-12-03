import { Component, OnInit } from '@angular/core';
import {essaiService} from '../services/essai.service';

@Component({
  selector: 'app-essai',
  templateUrl: './essai.component.html',
  styleUrls: ['./essai.component.css']
})
export class EssaiComponent implements OnInit {

  nbEssai: number;

  constructor(private essaiService: essaiService) { }

  ngOnInit() {
    this.nbEssai = this.essaiService.nbEssaiMax;
  }

}
