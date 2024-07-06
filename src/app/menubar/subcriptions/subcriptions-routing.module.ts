import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubcriptionsPage } from './subcriptions.page';

const routes: Routes = [
  {
    path: '',
    component: SubcriptionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubcriptionsPageRoutingModule {}
