import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightComponent } from './flight/flight.component';
import { FlightAddComponent } from './flight-add/flight-add.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { TouristComponent } from './tourist/tourist.component';
import { TouristAddComponent } from './tourist-add/tourist-add.component';
import { TouristEditComponent } from './tourist-edit/tourist-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    FlightComponent,
    FlightAddComponent,
    FlightEditComponent,
    TouristComponent,
    TouristAddComponent,
    TouristEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
