import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SocietysalsePage } from './societysalse.page';

const routes: Routes = [
  {
    path: '',
    component: SocietysalsePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SocietysalsePageRoutingModule {}
