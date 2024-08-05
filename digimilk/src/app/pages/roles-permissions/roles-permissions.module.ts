import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RolesPermissionsPageRoutingModule } from './roles-permissions-routing.module';

import { RolesPermissionsPage } from './roles-permissions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RolesPermissionsPageRoutingModule
  ],
  declarations: [RolesPermissionsPage]
})
export class RolesPermissionsPageModule {}
