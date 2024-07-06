import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceConfigurationPage } from './service-configuration.page';

const routes: Routes = [
  {
    path: '',
    component: ServiceConfigurationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceConfigurationPageRoutingModule {}
