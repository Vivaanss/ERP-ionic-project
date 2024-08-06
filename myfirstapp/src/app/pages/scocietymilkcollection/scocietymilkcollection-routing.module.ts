import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScocietymilkcollectionPage } from './scocietymilkcollection.page';

const routes: Routes = [
  {
    path: '',
    component: ScocietymilkcollectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScocietymilkcollectionPageRoutingModule {}
