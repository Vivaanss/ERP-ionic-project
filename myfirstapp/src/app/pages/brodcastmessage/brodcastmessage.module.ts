import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrodcastmessagePageRoutingModule } from './brodcastmessage-routing.module';

import { BrodcastmessagePage } from './brodcastmessage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrodcastmessagePageRoutingModule
  ],
  declarations: [BrodcastmessagePage]
})
export class BrodcastmessagePageModule {}
