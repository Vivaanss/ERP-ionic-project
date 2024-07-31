import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FarmerDemandPageRoutingModule } from './farmer-demand-routing.module';

import { FarmerDemandPage } from './farmer-demand.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FarmerDemandPageRoutingModule
  ],
  declarations: [FarmerDemandPage]
})
export class FarmerDemandPageModule {}
