import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromotionsComponent } from './pages/promotions/promotions.component';
import { authGuard } from 'src/app/guards/auth.guard';
import { adminGuard } from 'src/app/guards/admin.guard';

const routes: Routes = [
  {
    path: 'promotions',
    canActivate: [authGuard, adminGuard],
    component: PromotionsComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'promotions'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
