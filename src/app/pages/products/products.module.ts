import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { AgGridRenderComponent } from 'src/app/shared/components/ag-grid-render/ag-grid-render.component';
import { DropdownModule, MultiSelectModule, PopoverModule, TooltipModule } from 'projects/lib/src/lib';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';


const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      {path: 'all', component: ProductListComponent ,},
      { path: "", redirectTo: "all", pathMatch: "full" },
      {
        path: 'details',
        component: ProductDetailsComponent
      },
     
    ]
  },
 
];



@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailsComponent,
    ProductListComponent,
    ProductFilterComponent
  ],
  exports:[
    ProductsComponent,
    ProductDetailsComponent,
    ProductListComponent,
    ProductFilterComponent,
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
    DropdownModule,
    TooltipModule
  ],
})
export class ProductsModule { }
