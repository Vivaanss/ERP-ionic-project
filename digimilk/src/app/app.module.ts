import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouteReuseStrategy } from '@angular/router';
import { MenubarComponent } from './components/menubar/menubar.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { NgxCaptchaModule } from 'ngx-captcha'; // Import RecaptchaModule
import { DashboardLayoutComponent } from './shared/dashboard-layout/dashboard-layout.component';  // Import your component


@NgModule({
  declarations: [AppComponent,MenubarComponent,HeaderComponent,DashboardLayoutComponent  // Declare the MenubarComponent here
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,FormsModule,NgxCaptchaModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {} 
