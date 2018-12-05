import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LettreComponent } from './lettre/lettre.component';
import { LettreViewComponent } from './lettre-view/lettre-view.component';
import { MotComponent } from './mot/mot.component';
import { MotService } from './services/mot.service';
import { EssaiComponent } from './essai/essai.component';
import { DemmarerComponent } from './demmarer/demmarer.component';


@NgModule({
  declarations: [
    AppComponent,
    LettreComponent,
    LettreViewComponent,
    MotComponent,
    EssaiComponent,
    DemmarerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    MotService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
