import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SocietydemandsPage } from './societydemands.page';

const routes: Routes = [
  {
    path: '',
    component: SocietydemandsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SocietydemandsPageRoutingModule {}
