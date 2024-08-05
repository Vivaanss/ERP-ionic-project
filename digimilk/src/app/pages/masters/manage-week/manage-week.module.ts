import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageWeekPageRoutingModule } from './manage-week-routing.module';

import { ManageWeekPage } from './manage-week.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageWeekPageRoutingModule
  ],
  declarations: [ManageWeekPage]
})
export class ManageWeekPageModule {}
