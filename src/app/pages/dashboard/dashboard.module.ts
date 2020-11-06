import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoriesModule } from '../categories/categories.module';
import { ProductsModule } from '../products/products.module';
import { CustomersModule } from '../customers/customers.module';
import { SuppliersModule } from '../suppliers/suppliers.module';
import { HomeModule } from '../home/home.module';

const routes: Routes = [

  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'categories',
        loadChildren: () => import('../categories/categories.module').then(mod => mod.CategoriesModule),
      },
      { path: "", redirectTo: "categories", pathMatch: "full" },
      {
        path: 'products',
        loadChildren: () => import('../products/products.module').then(mod => mod.ProductsModule),
      },
     

      {
        path: 'customers',
        loadChildren: () => import('../customers/customers.module').then(mod => mod.CustomersModule),
      },
      {
        path: 'suppliers',
        loadChildren: () => import('../suppliers/suppliers.module').then(mod => mod.SuppliersModule),
      },
      {
        path: 'accounts',
        loadChildren: () => import('../accounts/accounts.module').then(mod => mod.AccountsModule),
      }, 
    
    ]
  },
 
  {
    path: 'settings',
    loadChildren: () => import('../settings/settings.module').then(mod => mod.SettingsModule),
  },
  {
    path: 'home',
    loadChildren: () => import('../home/home.module').then(mod => mod.HomeModule),
  },




];

@NgModule({
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    RouterModule.forChild(routes),
    CategoriesModule,
    ProductsModule,
    CustomersModule,
    SuppliersModule,
    HomeModule,
  ]
})
export class DashboardModule { }
