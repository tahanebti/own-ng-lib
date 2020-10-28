import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule, CardModule, OverlayLoaderModule, OverlaySidePanelModule } from 'projects/lib/src/lib';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeSidePanelComponent } from './home-side-panel/home-side-panel.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent,
    HomeSidePanelComponent,
  ],
  imports: [
    CommonModule,
    CardModule,
    OverlaySidePanelModule,
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
