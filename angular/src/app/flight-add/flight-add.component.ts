import { Component, OnInit, Input } from '@angular/core';
import { FlightService } from '../flight.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-flight-add',
  templateUrl: './flight-add.component.html',
  styleUrls: ['./flight-add.component.css']
})
export class FlightAddComponent implements OnInit {

  @Input() flightData = {departure: '',arrival: '', price: '', numberOfSeats: ''}

  constructor(public service: FlightService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  addFlight() {
    console.log(this.flightData);
    this.service.addFlight(this.flightData).subscribe((result) => {
      this.router.navigate(['flights/']);
    }, (err) => {
        console.log(err);
    }
    )
  }
}
