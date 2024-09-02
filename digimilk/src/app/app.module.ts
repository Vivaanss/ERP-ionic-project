import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha'; // Import RecaptchaModule
import { DashboardLayoutComponent } from './shared/dashboard-layout/dashboard-layout.component';  // Import your component
import { ExcelImportComponent } from './components/excel-import/excel-import.component';
import { ExcelImportService } from './services/excel-import.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AppComponent,DashboardLayoutComponent,ExcelImportComponent  // Declare the MenubarComponent here
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,FormsModule,NgxCaptchaModule, HttpClientModule],
  providers: [ExcelImportService,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy ,}],
  bootstrap: [AppComponent]
})
export class AppModule {} 
