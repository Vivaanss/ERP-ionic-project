import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChillingPage } from './chilling.page';

const routes: Routes = [
  {
    path: '',
    component: ChillingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChillingPageRoutingModule {}
