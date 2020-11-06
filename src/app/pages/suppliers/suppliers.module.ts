import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuppliersComponent } from './suppliers.component';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { SupplierCreateComponent } from './supplier-create/supplier-create.component';
import { SupplierDetailsComponent } from './supplier-details/supplier-details.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiSelectModule, PopoverModule, TabsetModule } from 'projects/lib/src/lib';
import { AgGridModule } from 'ag-grid-angular';
import { AgGridRenderComponent } from 'src/app/shared/components/ag-grid-render/ag-grid-render.component';

const routes: Routes = [
  {
    path: '',
    component: SuppliersComponent,
    children: [
      {path: 'all', component: SupplierListComponent ,},
      { path: "", redirectTo: "all", pathMatch: "full" },
      {
        path: ':id/details',
        component: SupplierDetailsComponent
      },
      {
        path: 'new',
        component: SupplierCreateComponent
      },
     
    ]
  },
 
];

@NgModule({
  declarations: [
    SuppliersComponent, 
    SupplierListComponent, 
    SupplierCreateComponent, 
    SupplierDetailsComponent
  ],
  exports:  [
    SuppliersComponent, 
    SupplierListComponent, 
    SupplierCreateComponent, 
    SupplierDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([AgGridRenderComponent]),
    MultiSelectModule.forRoot(),
    PopoverModule.forRoot({
      focusButton: 'confirm',
    }),
    TabsetModule.forRoot()
  ]
})
export class SuppliersModule { }
