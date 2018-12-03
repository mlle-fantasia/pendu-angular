import {Component, OnInit} from '@angular/core';
import { lettreService } from './services/lettre.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Pendu with Angular6';

  ALPHABET: any[];

  constructor(private lettreService: lettreService){

  }

  ngOnInit(){
    this.ALPHABET = this.lettreService.ALPHABET;
  }

}
