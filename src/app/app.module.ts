import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertModule, CardModule, MultiSelectModule, PopoverModule, ToasterModule, ToggleSwitchModule } from 'projects/lib/src/lib';
import { ProgressBarModule } from 'projects/lib/src/public-api';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { AccountsModule } from './pages/accounts/accounts.module';
import { SettingsModule } from './pages/settings/settings.module';
import { UsersModule } from './users/users.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { AuthModule } from './auth/auth.module';







@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    SharedModule,
    AuthModule,
    DashboardModule,
    AccountsModule,
    SettingsModule,
    UsersModule,
    ProgressBarModule,
    CardModule,
    DragDropModule,
   
  
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
