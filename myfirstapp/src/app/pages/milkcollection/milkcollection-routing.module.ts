import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MilkcollectionPage } from './milkcollection.page';

const routes: Routes = [
  {
    path: '',
    component: MilkcollectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MilkcollectionPageRoutingModule {}
