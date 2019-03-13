import {Component, OnInit} from '@angular/core';
import {Restaurant} from './models/restaurant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    rests: Restaurant[];

    constructor() {
      this.rests = [];
      let temp = new Restaurant();
      temp.name = 'Tav Cafe';
      temp.phone = '(514) 112-3581';
      temp.rating = 3;
      temp.priceRange = 3;
      temp.website = 'http://www.tav.ca';
      this.rests.push(temp);

      temp = new Restaurant();
      temp.name = 'Pizza Pita';
      temp.phone = '(514) 731-2296';
      temp.rating = 2;
      temp.priceRange = 5;
      temp.website = 'http://www.pizzapita.ca';
      this.rests.push(temp);

      temp = new Restaurant();
      temp.name = 'Exceptions';
      temp.phone = '(514) 555-1212';
      temp.rating = 5;
      temp.priceRange = 8;
      this.rests.push(temp);

}
}
