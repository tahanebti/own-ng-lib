import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertModule, CardModule, ToasterModule, ToggleSwitchModule } from 'projects/lib/src/lib';
import { ProgressBarModule } from 'projects/lib/src/public-api';
import { HomeModule } from './pages/home/home.module';

import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    SharedModule,
    HomeModule,
    AlertModule,
    ProgressBarModule,
    CardModule,
    ToasterModule,
    ToggleSwitchModule,
    DragDropModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
