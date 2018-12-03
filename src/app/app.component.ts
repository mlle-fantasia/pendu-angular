import {Component, OnInit} from '@angular/core';
import {motService} from './services/mot.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Pendu with Angular6';

  ALPHABET: any[];

  constructor(private motService: motService){

  }

  ngOnInit() {
    this.ALPHABET = this.motService.ALPHABET;
  }

}
