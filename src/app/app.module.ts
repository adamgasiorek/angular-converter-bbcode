import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BbcodeConverterPipe} from '../../dist/bbcode-converter-pipe';

@NgModule({
  declarations: [
    AppComponent,
    BbcodeConverterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
