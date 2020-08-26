import { Component, OnInit, Input } from '@angular/core';

import { Price } from '../../interfaces/price-interface';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {

  @Input() public price: Price;

  constructor() {
  }

  ngOnInit(): void {
  }

}
