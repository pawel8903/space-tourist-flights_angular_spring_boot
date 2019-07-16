import { Component, OnInit, Input } from '@angular/core';
import { FlightService } from '../flight.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TouristService } from '../tourist.service';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css']
})
export class FlightEditComponent implements OnInit {

  @Input() flightData: any = {};
  touriatData: any = [];

  constructor(public service: FlightService, public touristService: TouristService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.service.getFlight(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.flightData = data;
    })

    this.touristService.getTouirsts().subscribe((data: {}) => {
      console.log(data);
      this.touriatData = data;
    })
  }

  updateFlight() {
    this.service.updateFlight(this.flightData).subscribe((result) => {
      this.router.navigate(['/flights']);
    }, (err) => {
        console.log(err);
    }
      )
  }

  delete(id) {
    
    this.flightData.tourists.splice(id - 1, 1);
  }

  addTourist(id) {
    if (this.flightData.numberOfSeats > this.flightData.tourists.length) {
      for (let i = 0; i < this.touriatData.length; i++) {
        console.log(this.touriatData[i].id)
        if (this.touriatData[i].id == id) {
          this.flightData.tourists.push(this.touriatData[i]);
        }
      }
    } else {
      alert('There are not enough seats on board ')
    }
    
  }

}
