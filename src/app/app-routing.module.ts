import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'retailer',
    loadChildren: () =>
      import('./retailer/retailer.module').then((m) => m.RetailerModule),
  },
  {
    path: 'distributor',
    loadChildren: () =>
      import('./distributor/distributor.module').then(
        (m) => m.DistributorModule
      ),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
