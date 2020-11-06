import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaleComponent } from './sale.component';
import { EstimateComponent } from './estimate/estimate.component';
import { OrderComponent } from './order/order.component';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';


const routes: Routes = [
  { 
    path: '', component: SaleComponent,
    children: [
      {path: 'estimate', component: EstimateComponent ,},
      { path: "", redirectTo: "estimate", pathMatch: "full" },
      {path: 'order', component: OrderComponent ,},
    ]
  }

];



@NgModule({
  declarations: [SaleComponent, EstimateComponent, OrderComponent],
  exports: [SaleComponent, EstimateComponent, OrderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    
  ]
})
export class SaleModule { }
