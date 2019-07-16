import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

  flights: any = [];

  constructor(public service: FlightService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getFlights();
  }

  getFlights() {
    this.flights = [];
    this.service.getFlights().subscribe((data: {}) => {
      console.log(data);
      this.flights = data;
    });
  }

  delete(id) {
    this.service.deleteFlight(id).subscribe(res => {
      this.getFlights();
    }, (err) => {
      console.log(err);
    }
    );
  }
}
