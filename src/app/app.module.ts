import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LettreComponent } from './lettre/lettre.component';
import { LettreViewComponent } from './lettre-view/lettre-view.component';
import {lettreService} from './services/lettre.service';
import { MotComponent } from './mot/mot.component';
import { motService } from './services/mot.service';
import { EssaiComponent } from './essai/essai.component';
import { essaiService } from './services/essai.service';

@NgModule({
  declarations: [
    AppComponent,
    LettreComponent,
    LettreViewComponent,
    MotComponent,
    EssaiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    lettreService,
    motService,
    essaiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
