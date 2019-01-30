import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Pendu avec Angular 6';
  partieFinie: boolean;
  partieCommence: boolean;

  constructor() {
  }

  ngOnInit() {
    this.partieFinie = false ;
    this.partieCommence = false;
  }
}
