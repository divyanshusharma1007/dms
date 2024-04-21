import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DistributorRoutingModule } from './distributor-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { InventoryComponent } from './pages/inventory/inventory.component';



@NgModule({
  declarations: [
  
    HomeComponent,
       InventoryComponent
  ],
  imports: [
    CommonModule,
    DistributorRoutingModule
  ]
})
export class DistributorModule { }
