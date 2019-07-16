import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlightComponent } from './flight/flight.component';
import { FlightAddComponent } from './flight-add/flight-add.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { TouristComponent } from './tourist/tourist.component';
import { TouristEditComponent } from './tourist-edit/tourist-edit.component';
import { TouristAddComponent } from './tourist-add/tourist-add.component';
const routes: Routes = [
  {
    path: 'flights',
    component: FlightComponent,
    data: { title: 'Flight List' }
  },
  {
    path: 'flight-add',
    component: FlightAddComponent,
    data: { title: 'Flight Add' }
  },
  {
    path: 'flight-edit/:id',
    component: FlightEditComponent,
    data: { title: 'Flight Edit' }
  },
  {
    path: '',
    redirectTo: '/flights',
    pathMatch: 'full'
  },
  {
    path: 'tourists',
    component: TouristComponent,
    data: { title: 'Tourist List' }
  },
  {
    path: 'tourist-add',
    component: TouristAddComponent,
    data: { title: 'Flight Add' }
  },
  {
    path: 'tourist-edit/:id',
    component: TouristEditComponent,
    data: { title: 'Flight Edit' }
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
