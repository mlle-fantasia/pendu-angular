import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Le jeu du pendu avec Angular 6';
  partieFinie: boolean;

  constructor() {
  }

  ngOnInit() {
    this.partieFinie = false ;
  }
}
