import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MilkcollectionPageRoutingModule } from './milkcollection-routing.module';

import { MilkcollectionPage } from './milkcollection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MilkcollectionPageRoutingModule
  ],
  declarations: [MilkcollectionPage]
})
export class MilkcollectionPageModule {}
