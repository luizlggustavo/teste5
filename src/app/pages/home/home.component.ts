import { Component, OnInit } from '@angular/core';

import { Price } from '../../interfaces/price-interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public priceList: Price[];

  constructor() {
    this.priceList = [];
    const price: Price = {
      title: 'Exemplo 1',
      text: 'Increase the rank of you website by the higher speed',
      img: 'assets/img/database.png',
      pricePerMonth: 15.99,
    };
    const price2: Price = {
      title: 'Exemplo 2',
      text: 'Increase the rank of you website by the higher speed',
      img: 'assets/img/Globe.png',
      pricePerMonth: 15.99,
    };
    const price3: Price = {
      title: 'Exemplo 3',
      text: 'Increase the rank of you website by the higher speed',
      img: 'assets/img/database.png',
      pricePerMonth: 15.99,
    };
    const price4: Price = {
      title: 'Exemplo 4',
      text: 'Increase the rank of you website by the higher speed',
      img: 'assets/img/database.png',
      pricePerMonth: 15.99,
    };
    this.priceList.push(price);
    this.priceList.push(price2);
    this.priceList.push(price3);
    this.priceList.push(price4);
  }

  ngOnInit(): void {
    console.log(this.priceList);

  }

}

