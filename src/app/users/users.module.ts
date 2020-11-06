import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { CompanySettingsComponent } from './company-settings/company-settings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MultiSelectModule, OverlayLoaderModule, PopoverModule, TabsetModule } from 'projects/lib/src/lib';
import { AgGridRenderComponent } from '../shared/components/ag-grid-render/ag-grid-render.component';
import { AgGridModule } from 'ag-grid-angular';
import { LocalizationComponent } from './localization/localization.component';

const routes: Routes = [

  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: 'company-settings',
        component: CompanySettingsComponent
      },
      { path: "", redirectTo: "company-settings", pathMatch: "full" },
      {
        path: 'localization',
        component: LocalizationComponent
      },
      {
        path: 'profile',
        component: UserProfileComponent
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
  declarations: [UsersComponent, UserProfileComponent, CompanySettingsComponent, LocalizationComponent],
  exports: [UsersComponent,
     UserProfileComponent,
     CompanySettingsComponent, LocalizationComponent
    ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    RouterModule.forChild(routes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

    OverlayLoaderModule,
    AgGridModule.withComponents([AgGridRenderComponent]),
    MultiSelectModule.forRoot(),
    PopoverModule.forRoot({
      focusButton: 'confirm',
    }),
    TabsetModule.forRoot()
  ]
})
export class UsersModule { }
