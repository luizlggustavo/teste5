import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../material/material.module';
import { FooterComponent } from './footer/footer.component';
import { PriceComponent } from './price/price.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PriceComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PriceComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ComponentsModule { }
