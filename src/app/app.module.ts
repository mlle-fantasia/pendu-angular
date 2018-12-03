import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LettreComponent } from './lettre/lettre.component';
import { LettreViewComponent } from './lettre-view/lettre-view.component';
import {lettreService} from './services/lettre.service';

@NgModule({
  declarations: [
    AppComponent,
    LettreComponent,
    LettreViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    lettreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
