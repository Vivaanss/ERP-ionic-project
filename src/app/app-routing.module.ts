import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'app.component',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },

 
  

  {
    path: 'loginpage',
    loadChildren: () => import('./loginpage/loginpage.module').then( m => m.LoginpagePageModule)
  },
  {
    path: 'org',
    loadChildren: () => import('./menubar/org/org.module').then( m => m.OrgPageModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./menubar/users/users.module').then( m => m.UsersPageModule)
  },
  {
    path: 'subcriptions',
    loadChildren: () => import('./menubar/subcriptions/subcriptions.module').then( m => m.SubcriptionsPageModule)
  },
  {
    path: 'role',
    loadChildren: () => import('./menubar/role/role.module').then( m => m.RolePageModule)
  },
  {
    path: 'chilling',
    loadChildren: () => import('./menubar/chilling/chilling.module').then( m => m.ChillingPageModule)
  },
  {
    path: 'service-provider',
    loadChildren: () => import('./menubar/service-provider/service-provider.module').then( m => m.ServiceProviderPageModule)
  },
  {
    path: 'service-configuration',
    loadChildren: () => import('./menubar/service-configuration/service-configuration.module').then( m => m.ServiceConfigurationPageModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then( m => m.ProductPageModule)
  },


  
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
