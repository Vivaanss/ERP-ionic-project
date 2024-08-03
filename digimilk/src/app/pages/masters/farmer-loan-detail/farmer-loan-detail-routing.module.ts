import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FarmerLoanDetailPage } from './farmer-loan-detail.page';

const routes: Routes = [
  {
    path: '',
    component: FarmerLoanDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FarmerLoanDetailPageRoutingModule {}
