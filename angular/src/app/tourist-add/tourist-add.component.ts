import { Component, OnInit, Input } from '@angular/core';
import { TouristService } from '../tourist.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tourist-add',
  templateUrl: './tourist-add.component.html',
  styleUrls: ['./tourist-add.component.css']
})
export class TouristAddComponent implements OnInit {

  @Input() touristsData = {}

  constructor(public service: TouristService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  addTourist() {
    console.log(this.touristsData);
    this.service.addTouirst(this.touristsData).subscribe((result) => {
      this.router.navigate(['tourists']);
    }, (err) => {
      console.log(err);
    }
    )
  }
}
