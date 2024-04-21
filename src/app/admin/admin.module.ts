import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ManageDistributorsComponent } from './pages/manage-distributors/manage-distributors.component';
import { InventoryComponent } from './pages/inventory/inventory.component';


@NgModule({
  declarations: [
    AdminComponent,
    ManageDistributorsComponent,
    InventoryComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
