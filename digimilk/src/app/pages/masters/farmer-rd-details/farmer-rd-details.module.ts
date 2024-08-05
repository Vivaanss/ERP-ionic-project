import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FarmerRdDetailsPageRoutingModule } from './farmer-rd-details-routing.module';

import { FarmerRdDetailsPage } from './farmer-rd-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FarmerRdDetailsPageRoutingModule
  ],
  declarations: [FarmerRdDetailsPage]
})
export class FarmerRdDetailsPageModule {}
