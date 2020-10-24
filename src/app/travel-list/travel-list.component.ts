import { Component, OnInit } from '@angular/core';
import { travels } from '../app.travel';

@Component({
  selector: 'travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.css']
})
export class TravelListComponent implements OnInit {
  travels = travels;

  constructor() { }

  ngOnInit(): void {
  }

}
