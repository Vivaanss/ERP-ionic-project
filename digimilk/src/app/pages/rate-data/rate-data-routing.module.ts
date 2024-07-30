import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RateDataPage } from './rate-data.page';

const routes: Routes = [
  {
    path: '',
    component: RateDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RateDataPageRoutingModule {}
