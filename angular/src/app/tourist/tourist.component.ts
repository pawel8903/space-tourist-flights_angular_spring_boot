import { Component, OnInit } from '@angular/core';
import { TouristService } from '../tourist.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tourist',
  templateUrl: './tourist.component.html',
  styleUrls: ['./tourist.component.css']
})
export class TouristComponent implements OnInit {
  
  tourists: any = [];

  constructor(public service: TouristService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getTourists();
  }

  getTourists() {
    this.tourists = [];
    this.service.getTouirsts().subscribe((data: {}) => {
      console.log(data);
      this.tourists = data;
    });
  }

  delete(id) {
    this.service.deleteTouirst(id).subscribe(res => {
      this.getTourists();
    }, (err) => {
      console.log(err);
    }
    );
  }

}
