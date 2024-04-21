import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RetailerRoutingModule } from './retailer-routing.module';
import { RetailerComponent } from './retailer.component';
import { HomeComponent } from './pages/home/home.component';
import { RequestInventoryComponent } from './pages/request-inventory/request-inventory.component';


@NgModule({
  declarations: [
    RetailerComponent,
    HomeComponent,
    RequestInventoryComponent
  ],
  imports: [
    CommonModule,
    RetailerRoutingModule
  ]
})
export class RetailerModule { }
