import { Component } from '@angular/core';
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
      text: 'Home',
      url:  'home',
      iconClass: 'fa fa-home',
      active: true,
    },
    { 
      text: 'Layout',
      url:  'dashboard',
      iconClass: 'fa fa-code',
      active: false,
      submenu: [
        { name: 'HTML', url: '#' },
        { name: 'CSS', url: '#' },
        { name: 'Javascript', url: '#' }
      ]
    },
    { 
      text: 'Forms',
      url:  'dashboard',
      iconClass: 'fa fa-mobile',
      active: false,
      submenu: [
        { name: 'Tablets', url: '#' },
        { name: 'Mobiles', url: '#' },
        { name: 'Desktop', url: '#' }
      ]
    },
    { 
      text: 'UI Feateras',
      url:  '',
      iconClass: 'fa fa-globe',
      active: false,
      submenu: [
        { name: 'Chrome', url: '#' },
        { name: 'Firefox', url: '#' },
        { name: 'Desktop', url: '#' }
      ]
    },
    { 
      text: 'Modal Overlay',
      url:  '',
      iconClass: 'fa fa-globe',
      active: false,
      submenu: [
        { name: 'Chrome', url: '#' },
        { name: 'Firefox', url: '#' },
        { name: 'Desktop', url: '#' }
      ]
    },
    { 
      text: 'Extrats Components',
      url:  '',
      iconClass: 'fa fa-globe',
      active: false,
      submenu: [
        { name: 'Chrome', url: '#' },
        { name: 'Firefox', url: '#' },
        { name: 'Desktop', url: '#' }
      ]
    },
    { 
      text: 'Maps',
      url:  '',
      iconClass: 'fa fa-globe',
      active: false,
      submenu: [
        { name: 'Chrome', url: '#' },
        { name: 'Firefox', url: '#' },
        { name: 'Desktop', url: '#' }
      ]
    },
    { 
      text: 'Charts',
      url:  '',
      iconClass: 'fa fa-globe',
      active: false,
      submenu: [
        { name: 'Chrome', url: '#' },
        { name: 'Firefox', url: '#' },
        { name: 'Desktop', url: '#' }
      ]
    },
    { 
      text: 'Editors',
      url:  '',
      iconClass: 'fa fa-globe',
      active: false,
      submenu: [
        { name: 'Chrome', url: '#' },
        { name: 'Firefox', url: '#' },
        { name: 'Desktop', url: '#' }
      ]
    },
    { 
      text: 'Tables & data',
      url:  '',
      iconClass: 'fa fa-globe',
      active: false,
      submenu: [
        { name: 'Chrome', url: '#' },
        { name: 'Firefox', url: '#' },
        { name: 'Desktop', url: '#' }
      ]
    },
    { 
      text: 'Miscellaneous',
      url:  '',
      iconClass: 'fa fa-globe',
      active: false,
      submenu: [
        { name: 'Chrome', url: '#' },
        { name: 'Firefox', url: '#' },
        { name: 'Desktop', url: '#' }
      ]
    },
    { 
      text: 'Auth',
      url:  '',
      iconClass: 'fa fa-globe',
      active: false,
      submenu: [
        { name: 'Chrome', url: '#' },
        { name: 'Firefox', url: '#' },
        { name: 'Desktop', url: '#' }
      ]
    },
  ];
  }
}
