import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../material/material.module';
import { FooterComponent } from './footer/footer.component';
import { PriceComponent } from './price/price.component';
import { AvaliationComponent } from './avaliation/avaliation.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PriceComponent,
    AvaliationComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PriceComponent,
    AvaliationComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ComponentsModule { }
