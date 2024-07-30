import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardPageModule) },
  { path: 'profile', loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule)},
  { path: 'update-data',loadChildren: () => import('./pages/update-data/update-data.module').then(m => m.UpdateDataPageModule)},
  { path: 'configuration',loadChildren: () => import('./pages/configuration/configuration.module').then(m => m.ConfigurationPageModule)},
  { path: 'rate-data', loadChildren: () => import('./pages/rate-data/rate-data.module').then(m => m.RateDataPageModule)},
  { path: 'rate-calculator', loadChildren: () => import('./pages/rate-calculator/rate-calculator.module').then(m => m.RateCalculatorPageModule)},
  { path: 'support',loadChildren: () => import('./pages/support/support.module').then(m => m.SupportPageModule)},
  { path: 'demand-order', loadChildren: () => import('./pages/demand-order/demand-order.module').then(m => m.DemandOrderPageModule)},
  { path: 'about-us', loadChildren: () => import('./pages/about-us/about-us.module').then(m => m.AboutUsPageModule)},
  { path: 'send-feedback', loadChildren: () => import('./pages/send-feedback/send-feedback.module').then(m => m.SendFeedbackPageModule)},
  { path: 'terms-and-conditions', loadChildren: () => import('./pages/terms-and-conditions/terms-and-conditions.module').then(m => m.TermsAndConditionsPageModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
