import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FindExpertComponent } from './find-expert/find-expert.component';
import { ExpertDetailsComponent } from './expert-details/expert-details.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'find-experts',
        component: FindExpertComponent
      },
      { path: "", redirectTo: "company-settings", pathMatch: "full" },
      {
        path: 'expert-details',
        component: ExpertDetailsComponent
      },
     
    ]
    // children: [
    //   {
    //     path: 'categories',
    //     loadChildren: () => import('../categories/categories.module').then(mod => mod.CategoriesModule),
    //   },
    //   {
    //     path: 'products',
    //     loadChildren: () => import('../products/products.module').then(mod => mod.ProductsModule),
    //   },
     

    //   {
    //     path: 'customers',
    //     loadChildren: () => import('../customers/customers.module').then(mod => mod.CustomersModule),
    //   },
    //   {
    //     path: 'suppliers',
    //     loadChildren: () => import('../suppliers/suppliers.module').then(mod => mod.SuppliersModule),
    //   },
    //   {
    //     path: 'accounts',
    //     loadChildren: () => import('../accounts/accounts.module').then(mod => mod.AccountsModule),
    //   }, 
    //   {
    //     path: '',
    //     redirectTo: 'categories',
    //     pathMatch: 'full'
    //   }
    // ]
  },


];

@NgModule({
  declarations: [
    HomeComponent, 
    FindExpertComponent, 
    ExpertDetailsComponent
  ],
  exports:  [
    HomeComponent, 
    FindExpertComponent, 
    ExpertDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
