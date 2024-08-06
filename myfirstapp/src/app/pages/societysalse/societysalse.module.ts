import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SocietysalsePageRoutingModule } from './societysalse-routing.module';

import { SocietysalsePage } from './societysalse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SocietysalsePageRoutingModule
  ],
  declarations: [SocietysalsePage]
})
export class SocietysalsePageModule {}
