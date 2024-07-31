import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';  // Import the component


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  { path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardPageModule) },
  { path: 'roles-permissions', loadChildren: () => import('./pages/roles-permissions/roles-permissions.module').then(m => m.RolesPermissionsPageModule) },
  { path: 'masters', loadChildren: () => import('./pages/masters/masters.module').then(m => m.MastersPageModule) },
  { path: 'milk-collection', loadChildren: () => import('./pages/milk-collection/milk-collection.module').then(m => m.MilkCollectionPageModule) },
  { path: 'queries', loadChildren: () => import('./pages/queries/queries.module').then(m => m.QueriesPageModule) },
  { path: 'society-milk-collection', loadChildren: () => import('./pages/society-milk-collection/society-milk-collection.module').then(m => m.SocietyMilkCollectionPageModule) },
  { path: 'farmer-demand', loadChildren: () => import('./pages/farmer-demand/farmer-demand.module').then(m => m.FarmerDemandPageModule) },
  { path: 'payments', loadChildren: () => import('./pages/payments/payments.module').then(m => m.PaymentsPageModule) },
  { path: 'settings', loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsPageModule) },
  { path: 'sales', loadChildren: () => import('./pages/sales/sales.module').then(m => m.SalesPageModule) },
  { path: 'society-sales', loadChildren: () => import('./pages/society-sales/society-sales.module').then(m => m.SocietySalesPageModule) },
  { path: 'reports', loadChildren: () => import('./pages/reports/reports.module').then(m => m.ReportsPageModule) },
  { path: 'society-demands', loadChildren: () => import('./pages/society-demands/society-demands.module').then(m => m.SocietyDemandsPageModule) },
  { path: 'broadcast-message', loadChildren: () => import('./pages/broadcast-message/broadcast-message.module').then(m => m.BroadcastMessagePageModule) },
  { path: '**', component: PageNotFoundComponent },  // Add this line to handle undefined routes
   {path: '**',redirectTo: 'dashboard',},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
