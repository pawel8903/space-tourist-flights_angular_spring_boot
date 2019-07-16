import { Component, OnInit, Input } from '@angular/core';
import { TouristService } from '../tourist.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-tourist-edit',
  templateUrl: './tourist-edit.component.html',
  styleUrls: ['./tourist-edit.component.css']
})
export class TouristEditComponent implements OnInit {

  @Input() touristsData: any = {};
  flightData: any = [];

  constructor(public flightService: FlightService, public service: TouristService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.service.getTouirst(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.touristsData = data;
    })

    this.flightService.getFlights().subscribe((data: {}) => {
      this.flightData = data;
    })
  }

  updateFlight() {
    this.service.updateTouirst(this.touristsData).subscribe((result) => {
      this.router.navigate(['/flights']);
    }, (err) => {
      console.log(err);
    }
    )
  }

  delete(id) {

    this.touristsData.flights.splice(id - 1, 1);
  }

  addFlight(id) {
    
    for (let i = 0; i < this.flightData.length; i++) {
      if (this.flightData[i].id == id) {
        if (this.flightData[i].numberOfSeats > this.flightData[i].tourists.length) {
          this.touristsData.flights.push(this.flightData[i]);
        } else {
          alert('There are not enough seats on board ');
        }
      }
    }
  }
}
