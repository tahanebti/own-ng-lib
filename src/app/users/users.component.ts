import { Component, OnInit } from '@angular/core';
import { OverlayLoaderStyle, ProgressBarFill, SpinnerSize } from 'projects/lib/src/lib';
import { DashboardLayoutConfiguration, SidePanelPosition, SidePanelState } from '../core';
import { NavigationLink } from '../shared/components/navigation-link';

@Component({
  selector: 'tn-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

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
      text: 'Back To Home',
      url:  '/dashboard/categories',
      iconClass: 'fas fa-home',
      active: false,
      menuTitle: false
    },
    { 
      text: 'Company Setting',
      url:  'company-settings',
      iconClass: 'fas fa-building',
      active: false,
      menuTitle: false
    },
    { 
      text: 'Localization',
      url:  'localization',
      iconClass: 'fas fa-lock-open',
      active: false,
      menuTitle: false
    },
    { 
      text: 'Theme settings',
      url:  'home',
      iconClass: 'fas fa-image',
      active: false,
      menuTitle: false
    },
    { 
      text: 'Role & Permission',
      url:  'home',
      iconClass: 'fas fa-key',
      active: false,
      menuTitle: false
    },
    { 
      text: 'Email Settings',
      url:  'home',
      iconClass: 'fas fa-at',
      active: false,
      menuTitle: false
    },
    { 
      text: 'Invoice Settings',
      url:  'home',
      iconClass: 'fas fa-pen-square',
      active: false,
      menuTitle: false
    },
    { 
      text: 'Salary Settings',
      url:  'home',
      iconClass: 'fas fa-wallet',
      active: false,
      menuTitle: false
    },
    { 
      text: 'Notfications',
      url:  'home',
      iconClass: 'fas fa-globe',
      active: false,
      menuTitle: false
    },
    { 
      text: 'Change Password',
      url:  'home',
      iconClass: 'fas fa-lock',
      active: false,
      menuTitle: false
    },
  ];
  }

}
