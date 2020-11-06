import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CustomersComponent } from './customers.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiSelectModule, PopoverModule, TabsetModule } from 'projects/lib/src/lib';
import { AgGridModule } from 'ag-grid-angular';
import { AgGridRenderComponent } from 'src/app/shared/components/ag-grid-render/ag-grid-render.component';
import { CustomerNavbarComponent } from './customer-navbar/customer-navbar.component';


const routes: Routes = [
  {
    path: '',
    component: CustomersComponent,
    children: [
      {path: 'all', component: CustomerListComponent ,},
      { path: "", redirectTo: "all", pathMatch: "full" },
      {
        path: ':id/details',
        component: CustomerDetailsComponent
      },
      {
        path: 'new',
        component: CustomerCreateComponent
      },
     
    ]
  },
 
];

@NgModule({
  declarations: [
    CustomersComponent,
    CustomerListComponent, 
    CustomerDetailsComponent, 
    CustomerCreateComponent, 
    CustomerNavbarComponent
  ],
  exports: [
    CustomersComponent,
    CustomerListComponent, 
    CustomerDetailsComponent, 
    CustomerCreateComponent,
    CustomerNavbarComponent
  ],

  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([AgGridRenderComponent]),
    MultiSelectModule.forRoot(),
    PopoverModule.forRoot({
      focusButton: 'confirm',
    }),
    TabsetModule.forRoot()
  ]
})
export class CustomersModule { }
