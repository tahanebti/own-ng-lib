import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsComponent } from './accounts.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { PaymentsComponent } from './payments/payments.component';
import { EstimatesComponent } from './estimates/estimates.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MultiSelectModule, PopoverModule, TabsetModule } from 'projects/lib/src/lib';
import { AgGridModule } from 'ag-grid-angular';
import { AgGridRenderComponent } from 'src/app/shared/components/ag-grid-render/ag-grid-render.component';
import { EstimateCreateComponent } from './estimates/estimate-create/estimate-create.component';
import { PaymentDetailsComponent } from './payments/payment-details/payment-details.component';

const routes: Routes = [
  {
    path: '',
    component: AccountsComponent,
    children: [
      {
        path: 'estimates', component: EstimatesComponent,
       
      },
      
      { path: "", redirectTo: "estimates", pathMatch: "full" },
      {
        path: 'estimates/new',
        component: EstimateCreateComponent
      },
      {
        path: 'invoices',
        component: InvoicesComponent
      },
      {
        path: 'payments',
        component: PaymentsComponent
      },
      {
        path: 'payments/:id/details',
        component: PaymentDetailsComponent
      },

    ]
  },
 
];

@NgModule({
  declarations: [
    AccountsComponent, 
    InvoicesComponent, 
    PaymentsComponent, 
    EstimatesComponent,
    EstimateCreateComponent,
    PaymentDetailsComponent 
  ],
  exports: [
    AccountsComponent, 
    InvoicesComponent, 
    PaymentsComponent, 
    EstimatesComponent,
    EstimateCreateComponent,
    PaymentDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),

    AgGridModule.withComponents([AgGridRenderComponent]),
    MultiSelectModule.forRoot(),
    PopoverModule.forRoot({
      focusButton: 'confirm',
    }),
    TabsetModule.forRoot()
  ]
})
export class AccountsModule { }
