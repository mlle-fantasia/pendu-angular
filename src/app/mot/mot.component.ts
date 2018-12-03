import { Component, OnInit } from '@angular/core';
import { motService } from '../services/mot.service';

@Component({
  selector: 'app-mot',
  templateUrl: './mot.component.html',
  styleUrls: ['./mot.component.css']
})
export class MotComponent implements OnInit {

  motCache: any;

  constructor(private motService: motService) { }

  ngOnInit() {
    this.motCache = this.motService.selectionMot();
  }

}
