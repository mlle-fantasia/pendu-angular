import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LettreComponent } from './lettre/lettre.component';
import { LettreViewComponent } from './lettre-view/lettre-view.component';
import { MotComponent } from './mot/mot.component';
import { MotService } from './services/mot.service';
import { EssaiComponent } from './essai/essai.component';
import { DemmarerComponent } from './demmarer/demmarer.component';
import {HttpClientModule} from '@angular/common/http';
import { LoaderComponent } from './loader/loader.component';


@NgModule({
  declarations: [
    AppComponent,
    LettreComponent,
    LettreViewComponent,
    MotComponent,
    EssaiComponent,
    DemmarerComponent,
    LoaderComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [
    MotService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
