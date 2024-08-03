import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SetMinSnfFatPageRoutingModule } from './set-min-snf-fat-routing.module';

import { SetMinSnfFatPage } from './set-min-snf-fat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SetMinSnfFatPageRoutingModule
  ],
  declarations: [SetMinSnfFatPage]
})
export class SetMinSnfFatPageModule {}
