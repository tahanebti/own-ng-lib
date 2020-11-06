import { Component } from '@angular/core';
import { OverlayLoaderStyle, SpinnerSize } from 'lib';
import { ProgressBarFill } from 'projects/lib/src/lib';
import { DashboardLayoutConfiguration } from './core/layouts/dashboard-layout/models/dashboard-layout-config';
import { SidePanelPosition } from './core/layouts/dashboard-layout/models/side-panel-positon.enum';
import { SidePanelState } from './core/layouts/dashboard-layout/models/side-panel-state.enum';
import { NavigationLink } from './shared/components/navigation-link';

@Component({
  selector: 'tn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public configuration: DashboardLayoutConfiguration;
  public menus: NavigationLink[] 
  public progressFill: ProgressBarFill = ProgressBarFill.INFO;

  public overlayStyle: OverlayLoaderStyle = OverlayLoaderStyle.DIM_DARK;
  public spinnerSize: SpinnerSize = SpinnerSize.SMALL
  
  constructor() {
    this.configuration = new DashboardLayoutConfiguration(
      SidePanelPosition.LEFT, 
      SidePanelState.OPEN
    );
    this.createLinks();
  }

  private createLinks() {
    this.menus = [
    { 
      text: 'Main',
      url:  'home',
      active: false,
      menuTitle: false
    },
    { 
      text: 'Products Catalog',
      url:  'products/all',
      iconClass: 'fa fa-cart-arrow-down',
      active: false,
   
    },

    { 
      text: 'Directory',
      iconClass: 'fa fa-suitcase',
      active: false,
      submenu: [
        { name: 'Categories', url: 'categories' },
        { name: 'Products', url: 'products/all' }
      ]
    },

    { 
      text: 'Customers',
      url:  'customers/all',
      iconClass: 'fas fa-user-friends',
      active: false,
    
    },
    { 
      text: 'Suppliers',
      url:  'suppliers/all',
      iconClass: 'fas fa-box',
      active: false,
    
    },
  
    { 
      text: 'Hr',
      url:  'home',
      active: false,
    },
    { 
      text: 'Sale',
      iconClass: 'far fa-credit-card',
      active: false,
      submenu: [
        { name: 'Estimates', url: 'accounts/estimates' },
        { name: 'Invoices', url: 'accounts/invoices' },
        { name: 'Payments', url: 'accounts/payments' },
        { name: 'Expenses', url: '#' },
        { name: 'Provident Fund', url: '#' },
        { name: 'Taxes', url: '#' },
      ]
    },
    { 
      text: 'Payroll',
      url:  '',
      iconClass: 'fas fa-money-check-alt',
      active: false,
      submenu: [
        { name: 'Chrome', url: '#' },
        { name: 'Firefox', url: '#' },
        { name: 'Desktop', url: '#' }
      ]
    },
    { 
      text: 'Purchase',
      url:  '',
      iconClass: 'fas fa-shopping-cart',
      active: false,
      submenu: [
        { name: 'Supplier Order', url: '#' },
        { name: 'Supplier Delivery note', url: '#' },
        { name: 'Supplier invoices', url: '#' }
      ]
    },
    { 
      text: 'Accounts',
      url:  '',
      iconClass: 'fab fa-cc-amazon-pay',
      active: false,
      submenu: [
        { name: 'Cache Management', url: '#' },
        { name: 'Bank Account', url: '#' },
        { name: 'Balance customer', url: '#' },
        { name: 'Balance supplier', url: '#' },
      ]
    },
   
    { 
      text: 'Reports',

      iconClass: 'fa fa-globe',
      active: false,
     
    },
    { 
      text: 'Administration',
      url:  'home',
      active: false,
    },
    { 
      text: 'Setting',
      url:  'users',
      iconClass: 'fa fa-globe',
      active: false,
     
    },
  ];
  }
}
