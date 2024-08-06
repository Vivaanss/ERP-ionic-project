import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScocietymilkcollectionPageRoutingModule } from './scocietymilkcollection-routing.module';

import { ScocietymilkcollectionPage } from './scocietymilkcollection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScocietymilkcollectionPageRoutingModule
  ],
  declarations: [ScocietymilkcollectionPage]
})
export class ScocietymilkcollectionPageModule {}
