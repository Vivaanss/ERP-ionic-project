import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MilkTypePage } from './milk-type.page';

const routes: Routes = [
  {
    path: '',
    component: MilkTypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MilkTypePageRoutingModule {}
