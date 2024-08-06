import { HomePageModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },





  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },

  { path: 'dashbord',
    loadChildren: () => import('./pages/dashbord/dashbord.module').then(m =>m.DashbordPageModule)
   },
  {
    path: 'rolespermission',
    loadChildren: () => import('./pages/rolespermission/rolespermission.module').then( m => m.RolespermissionPageModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./pages/users/users.module').then( m => m.UsersPageModule)
  },
  {
    path: 'milkcollection',
    loadChildren: () => import('./pages/milkcollection/milkcollection.module').then( m => m.MilkcollectionPageModule)
  },
  {
    path: 'queries',
    loadChildren: () => import('./pages/queries/queries.module').then( m => m.QueriesPageModule)
  },
  {
    path: 'scocietymilkcollection',
    loadChildren: () => import('./pages/scocietymilkcollection/scocietymilkcollection.module').then( m => m.ScocietymilkcollectionPageModule)
  },
  {
    path: 'farmersdemand',
    loadChildren: () => import('./pages/farmersdemand/farmersdemand.module').then( m => m.FarmersdemandPageModule)
  },
  {
    path: 'payments',
    loadChildren: () => import('./pages/payments/payments.module').then( m => m.PaymentsPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'salse',
    loadChildren: () => import('./pages/salse/salse.module').then( m => m.SalsePageModule)
  },
  {
    path: 'societysalse',
    loadChildren: () => import('./pages/societysalse/societysalse.module').then( m => m.SocietysalsePageModule)
  },
  {
    path: 'reports',
    loadChildren: () => import('./pages/reports/reports.module').then( m => m.ReportsPageModule)
  },
  {
    path: 'societydemands',
    loadChildren: () => import('./pages/societydemands/societydemands.module').then( m => m.SocietydemandsPageModule)
  },
  {
    path: 'brodcastmessage',
    loadChildren: () => import('./pages/brodcastmessage/brodcastmessage.module').then( m => m.BrodcastmessagePageModule)
  },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
