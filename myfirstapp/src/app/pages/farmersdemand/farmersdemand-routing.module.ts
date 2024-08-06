import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FarmersdemandPage } from './farmersdemand.page';

const routes: Routes = [
  {
    path: '',
    component: FarmersdemandPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FarmersdemandPageRoutingModule {}
