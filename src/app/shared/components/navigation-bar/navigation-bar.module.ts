import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationWidgetWrapperComponent } from './navigation-widget-wrapper/navigation-widget-wrapper.component';
import { ProfileMenuComponent } from './navigation-widgets/profile-menu/profile-menu.component';
import { NotificationComponent } from './navigation-widgets/notification/notification.component';
import { ContextMenuModule, DropdownModule } from 'projects/lib/src/lib';
import { NavigationProfileMenuComponent } from '../navigation-profile-menu/navigation-profile-menu.component';
import { NavigationNotificationComponent } from '../navigation-notification/navigation-notification.component';
import { MessageComponent } from './navigation-widgets/message/message.component';
import { NavigationMessageComponent } from '../navigation-message/navigation-message.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NavigationWidgetWrapperComponent, 
    ProfileMenuComponent, 
    NotificationComponent,
    NavigationProfileMenuComponent,
    NavigationNotificationComponent,
    MessageComponent,
    NavigationMessageComponent
  ],
  imports: [
    CommonModule,
    ContextMenuModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    NavigationWidgetWrapperComponent, 
    ProfileMenuComponent, 
    NotificationComponent,
    NavigationProfileMenuComponent,
    NavigationNotificationComponent,
    NavigationMessageComponent,
    MessageComponent,
  ],
  entryComponents: [
    NavigationProfileMenuComponent,
    NavigationNotificationComponent
  ]
})
export class NavigationBarModule { }
