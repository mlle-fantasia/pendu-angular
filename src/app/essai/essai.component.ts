import { Component, OnInit } from '@angular/core';
import {motService} from '../services/mot.service';

@Component({
  selector: 'app-essai',
  templateUrl: './essai.component.html',
  styleUrls: ['./essai.component.css']
})
export class EssaiComponent implements OnInit {

  nbEssai: number;

  constructor(private motService: motService) { }

  ngOnInit() {
    this.nbEssai = this.motService.nbEssaiMax;
  }

}
