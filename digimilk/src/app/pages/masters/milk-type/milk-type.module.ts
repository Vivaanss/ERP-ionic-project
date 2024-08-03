import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MilkTypePageRoutingModule } from './milk-type-routing.module';

import { MilkTypePage } from './milk-type.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MilkTypePageRoutingModule
  ],
  declarations: [MilkTypePage]
})
export class MilkTypePageModule {}
