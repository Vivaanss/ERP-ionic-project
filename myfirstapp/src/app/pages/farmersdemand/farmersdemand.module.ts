import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FarmersdemandPageRoutingModule } from './farmersdemand-routing.module';

import { FarmersdemandPage } from './farmersdemand.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FarmersdemandPageRoutingModule
  ],
  declarations: [FarmersdemandPage]
})
export class FarmersdemandPageModule {}
