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
  public links: NavigationLink[];
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
      new NavigationLink("Home", ['home'], "fas fa-home"),
      new NavigationLink("Dashboard", ['dashbaord'], "fas fa-tachometer-alt"),
      new NavigationLink("Account Info", ['account'], "fas fa-user-circle")
    ]
  }
}
