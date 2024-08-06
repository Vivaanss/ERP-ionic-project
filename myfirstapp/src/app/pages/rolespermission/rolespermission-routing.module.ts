import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RolespermissionPage } from './rolespermission.page';

const routes: Routes = [
  {
    path: '',
    component: RolespermissionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RolespermissionPageRoutingModule {}
