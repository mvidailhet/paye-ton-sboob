import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromotionsComponent } from './pages/promotions/promotions.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [
    PromotionsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
