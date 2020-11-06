import { Component, OnInit } from '@angular/core';

import { AlertType, OverlayLoaderStyle, ProgressBarFill, ProgressBarService, SpinnerSize, ToasterPosition, ToasterService, ToggleSwitchColor, ToggleSwitchShape, ToggleSwitchSize } from 'projects/lib/src/lib';
import { DashboardLayoutConfiguration, SidePanelPosition, SidePanelState } from 'src/app/core';
import { NavigationLink } from 'src/app/shared/components/navigation-link';

@Component({
  selector: 'tn-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // public AlertType = AlertType;
  // public isPrimaryVisible: boolean;

  // public alertType: AlertType;
  // public isUpdating: boolean;
  // public alertVisible: boolean;
  // public alertMessage: string;
  // public alertDismissible: boolean;
  // public alertIconClass: string;

  // public ToggleSwitchColor = ToggleSwitchColor;
  // public ToggleSwitchShape = ToggleSwitchShape;
  // public ToggleSwitchSize = ToggleSwitchSize;

  // public isChecked: boolean = false;

  // public form: FormGroup;
  // public toggleForm: any = {
  //   isActive: false
  // };

  
  // public ToastType = ToastType;
  // public tosterPosition: ToasterPosition = ToasterPosition.BOTTOM_RIGHT




  // constructor(
  //   private _progressBarService: ProgressBarService,
  //   private _toasterService: ToasterService,
  //   private _formBuilder: FormBuilder
  //   ) { 
  //   this.isPrimaryVisible = false;

  //   this.isUpdating = false;
  //   this.alertVisible = false;
  //   this.alertType = AlertType.SUCCESS
  //   this.alertMessage = "Update was successful!";
  //   this.alertIconClass = "fas fa-info-circle";
  //   this.alertDismissible = false;
  // }

  // ngOnInit(): void {
  //   setTimeout(() => this.isPrimaryVisible = true, 2000);
  //   setTimeout(() => this.isPrimaryVisible = false, 4000);

  //   this.form = this._formBuilder.group({
  //     isActive: [false]
  //   });

  //   this.toggleForm = {
  //     isActive: null
  //   }


  // }

  // public loadData(): void {
  //   this._progressBarService.onProgressComplete()
  //     .pipe(take(1))
  //     .subscribe(complete => {
  //       this.isUpdating = false;
  //       this.alertVisible = true;
  //       setTimeout(() => this.alertVisible = false, 2000);
  //     });
  //   this.isUpdating = true;
  //   this._progressBarService.updateProgress(12);
  //   setTimeout(() => this._progressBarService.updateProgress(45), 2000);
  //   setTimeout(() => this._progressBarService.updateProgress(73), 4000);
  //   setTimeout(() => this._progressBarService.updateProgress(100), 5000);
  // }


  // public sendToast(message: string, type: ToastType) {
  //   this._toasterService.toast(message, type)
  // }

  // public print() {
  //   console.log(this.form.value);
  // }


  // backlog = [
  //   'fix bug',
  //   'implement authentication',
  //   'buy coffee',
  //   'learn Angular',
  //   'learn Angular CDK'
  // ];

  // sprint = [
  //   'setup project'
  // ];

  // drop(event: CdkDragDrop<string[]>) {
  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //   } else {
  //     transferArrayItem(
  //       event.previousContainer.data,
  //       event.container.data,
  //       event.previousIndex,
  //       event.currentIndex
  //     );
  //   }
  // }

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


  ngOnInit(): void {
    console.log('Method not implemented.');
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
      url:  '/users/company-settings',
      iconClass: 'fa fa-globe',
      active: false,
     
    },
  ];
  }

}
