import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalsePage } from './salse.page';

const routes: Routes = [
  {
    path: '',
    component: SalsePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalsePageRoutingModule {}
