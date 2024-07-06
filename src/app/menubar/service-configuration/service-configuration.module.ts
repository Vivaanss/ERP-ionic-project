import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceConfigurationPageRoutingModule } from './service-configuration-routing.module';

import { ServiceConfigurationPage } from './service-configuration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiceConfigurationPageRoutingModule
  ],
  declarations: [ServiceConfigurationPage]
})
export class ServiceConfigurationPageModule {}
