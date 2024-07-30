import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemandOrderPage } from './demand-order.page';

const routes: Routes = [
  {
    path: '',
    component: DemandOrderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemandOrderPageRoutingModule {}
