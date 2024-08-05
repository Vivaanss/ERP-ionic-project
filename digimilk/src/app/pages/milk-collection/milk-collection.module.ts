import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MilkCollectionPageRoutingModule } from './milk-collection-routing.module';

import { MilkCollectionPage } from './milk-collection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MilkCollectionPageRoutingModule
  ],
  declarations: [MilkCollectionPage]
})
export class MilkCollectionPageModule {}
