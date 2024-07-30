import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RateCalculatorPageRoutingModule } from './rate-calculator-routing.module';

import { RateCalculatorPage } from './rate-calculator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RateCalculatorPageRoutingModule
  ],
  declarations: [RateCalculatorPage]
})
export class RateCalculatorPageModule {}
