import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { SidePanelService } from './layouts/dashboard-layout/services/side-panel.service';



@NgModule({
  declarations: [DashboardLayoutComponent],
  exports: [DashboardLayoutComponent],
  imports: [
    CommonModule
  ],
  providers: [SidePanelService]
})
export class CoreModule { }
