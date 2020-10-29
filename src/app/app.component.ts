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
  public links: NavigationLink[] 
  public progressFill: ProgressBarFill = ProgressBarFill.INFO;
  
  constructor() {
    this.configuration = new DashboardLayoutConfiguration(
      SidePanelPosition.LEFT, 
      SidePanelState.OPEN
    );
    this.createLinks();
  }

  private createLinks() {
    this.links = [
    { 
      text: 'Home',
      url:  'home',
      iconClass: 'fa fa-home',
      active: true,
    },
    { 
      text: 'Front-end',
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
      text: 'Responsive web',
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
      text: 'Web Browser',
      url:  '',
      iconClass: 'fa fa-globe',
      active: false,
      submenu: [
        { name: 'Chrome', url: '#' },
        { name: 'Firefox', url: '#' },
        { name: 'Desktop', url: '#' }
      ]
    }
  ];
  }
}
