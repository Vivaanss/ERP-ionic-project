import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubcriptionsPageRoutingModule } from './subcriptions-routing.module';

import { SubcriptionsPage } from './subcriptions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubcriptionsPageRoutingModule
  ],
  declarations: [SubcriptionsPage]
})
export class SubcriptionsPageModule {}
