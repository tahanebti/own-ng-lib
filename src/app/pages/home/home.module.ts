import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule, CardModule, DialogModule, OverlayLoaderModule, OverlaySidePanelModule } from 'projects/lib/src/lib';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeSidePanelComponent } from './home-side-panel/home-side-panel.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeDialogComponent } from './home-dialog/home-dialog.component';



@NgModule({
  declarations: [
    HomeComponent,
    HomeSidePanelComponent,
    HomeDialogComponent,
  ],
  imports: [
    CommonModule,
    CardModule,
    OverlaySidePanelModule,
    DialogModule,
    HomeRoutingModule,
    OverlayLoaderModule,
    SharedModule,
    ButtonModule
    

    
  ],
  entryComponents: [
    HomeSidePanelComponent
  ]
})
export class HomeModule { }
