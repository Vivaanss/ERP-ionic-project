import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RouteMasterPageRoutingModule } from './route-master-routing.module';

import { RouteMasterPage } from './route-master.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouteMasterPageRoutingModule
  ],
  declarations: [RouteMasterPage]
})
export class RouteMasterPageModule {}
