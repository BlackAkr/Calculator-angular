import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalcButtonComponent } from './calc-button/calc-button.component';
import { ButtonsRowComponent } from './buttons-row/buttons-row.component';
import { ConsoleComponent } from './console/console.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CalcButtonComponent,
    ButtonsRowComponent,
    ConsoleComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
