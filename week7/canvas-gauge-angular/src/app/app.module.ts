import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {GaugeComponent} from './gauge/gauge.component';
import {GaugeCleanComponent} from './gauge-clean/gauge-clean.component';
import {GaugeManagerComponent} from './gauge-manager/gauge-manager.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    GaugeComponent,
    GaugeCleanComponent,
    GaugeManagerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
