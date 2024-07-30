import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RateDataPageRoutingModule } from './rate-data-routing.module';

import { RateDataPage } from './rate-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RateDataPageRoutingModule
  ],
  declarations: [RateDataPage]
})
export class RateDataPageModule {}
