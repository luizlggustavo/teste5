import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    MatSelectModule,
    MatToolbarModule,
    MatButtonModule,
  ]
})
export class MaterialModule { }
