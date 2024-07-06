import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChillingPageRoutingModule } from './chilling-routing.module';

import { ChillingPage } from './chilling.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChillingPageRoutingModule
  ],
  declarations: [ChillingPage]
})
export class ChillingPageModule {}
