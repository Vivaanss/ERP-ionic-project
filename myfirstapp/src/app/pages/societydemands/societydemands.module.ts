import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SocietydemandsPageRoutingModule } from './societydemands-routing.module';

import { SocietydemandsPage } from './societydemands.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SocietydemandsPageRoutingModule
  ],
  declarations: [SocietydemandsPage]
})
export class SocietydemandsPageModule {}
