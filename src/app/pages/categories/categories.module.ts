import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCategoryComponent } from './add-category/add-category.component';
import { MultiSelectModule, PopoverModule, TabsetModule, TooltipModule } from 'projects/lib/src/lib';

import { SectorsComponent } from './sectors/sectors.component';
import { DepartmentsComponent } from './departments/departments.component';
import { AgGridModule } from 'ag-grid-angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoryNavbarComponent } from './category-navbar/category-navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoriesComponent } from './categories.component';
import { AgGridRenderComponent } from 'src/app/shared/components/ag-grid-render/ag-grid-render.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CategoriesComponent,
  },
];

@NgModule({
  declarations: [
    AddCategoryComponent, 
    CategoryNavbarComponent, 
    SectorsComponent, 
    DepartmentsComponent,
    CategoriesComponent,
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
  ],
  exports: [
    CategoriesComponent,
    AddCategoryComponent,
    CategoryNavbarComponent
  ],
})
export class CategoriesModule { }
