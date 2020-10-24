import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { travels } from '../app.travel';
import { CartService } from '../cart.service';

@Component({
  selector: 'travel-details',
  templateUrl: './travel-details.component.html',
  styleUrls: ['./travel-details.component.css']
})
export class TravelDetailsComponent implements OnInit {
  travel;
  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  addToCart(travel) {
    window.alert('Your travel has been added to the cart!');
    this.cartService.addToCart(travel);
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
    this.travel = travels[+params.get('travelId')];
   });
  }
}