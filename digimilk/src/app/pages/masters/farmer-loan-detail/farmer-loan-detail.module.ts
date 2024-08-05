import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FarmerLoanDetailPageRoutingModule } from './farmer-loan-detail-routing.module';

import { FarmerLoanDetailPage } from './farmer-loan-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FarmerLoanDetailPageRoutingModule
  ],
  declarations: [FarmerLoanDetailPage]
})
export class FarmerLoanDetailPageModule {}
