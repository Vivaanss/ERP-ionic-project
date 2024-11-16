import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BOMComponent } from './bom/bom.component';
import { WorkOrdersComponent } from './work-orders/work-orders.component';
import { ReportsComponent } from './reports/reports.component';
import { ProdDashboardComponent } from './prod-dashboard/prod-dashboard.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { HeaderComponent } from './header/header.component';


import { BrowserModule } from '@angular/platform-browser';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { StatsComponent } from './stats/stats.component';

@NgModule({
  declarations: [BOMComponent, WorkOrdersComponent, ReportsComponent, ProdDashboardComponent, CreateOrderComponent, HeaderComponent, StatsComponent],
  imports: [
    CommonModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class ProductionModule { }
