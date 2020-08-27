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
      title: 'SHARED HOSTING',
      text: 'Increase the rank of you website by the higher speed',
      img: 'assets/img/database.png',
      pricePerMonth: 15.99,
    };
    const price2: Price = {
      title: 'VPS HOSTING',
      text: 'Be able to conceal your ID whenever needed',
      img: 'assets/img/VPS_icon.png',
      pricePerMonth: 8.99,
    };
    const price3: Price = {
      title: 'CLOUD HOSTING',
      text: 'Super convenient and highly customizable option',
      img: 'assets/img/Cloud_Icon.png',
      pricePerMonth: 7.99,
    };
    const price4: Price = {
      title: 'WORDPRESS HOSTING',
      text: 'With low cost and high variety of tools, pluggins of your choice',
      img: 'assets/img/Globe.png',
      pricePerMonth: 13.99,
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

