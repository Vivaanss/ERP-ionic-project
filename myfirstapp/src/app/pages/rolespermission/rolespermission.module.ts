import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RolespermissionPageRoutingModule } from './rolespermission-routing.module';

import { RolespermissionPage } from './rolespermission.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RolespermissionPageRoutingModule
  ],
  declarations: [RolespermissionPage]
})
export class RolespermissionPageModule {}
