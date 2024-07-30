import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemandOrderPageRoutingModule } from './demand-order-routing.module';

import { DemandOrderPage } from './demand-order.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DemandOrderPageRoutingModule
  ],
  declarations: [DemandOrderPage]
})
export class DemandOrderPageModule {}
