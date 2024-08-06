import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrodcastmessagePage } from './brodcastmessage.page';

const routes: Routes = [
  {
    path: '',
    component: BrodcastmessagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrodcastmessagePageRoutingModule {}
