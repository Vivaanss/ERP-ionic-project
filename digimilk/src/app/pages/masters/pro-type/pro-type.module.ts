import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProTypePageRoutingModule } from './pro-type-routing.module';

import { ProTypePage } from './pro-type.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProTypePageRoutingModule
  ],
  declarations: [ProTypePage]
})
export class ProTypePageModule {}
