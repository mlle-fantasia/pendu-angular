import { Component, OnInit } from '@angular/core';
import { motService } from '../services/mot.service';
import {lettreService} from '../services/lettre.service';

@Component({
  selector: 'app-mot',
  templateUrl: './mot.component.html',
  styleUrls: ['./mot.component.css']
})
export class MotComponent implements OnInit {

  mot: any;
  motCache: any;


  constructor(private motService: motService, private lettreService: lettreService) { }

  ngOnInit() {
    this.motService.selectionMot();
    this.mot = this.motService.mot;
    this.motCache = this.motService.testerLeMot(this.mot);
  }

}
