import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromotionsComponent } from './pages/promotions/promotions.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    PromotionsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
