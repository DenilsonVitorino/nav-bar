import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MNavBarComponent } from './m-nav-bar/m-nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    MNavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
