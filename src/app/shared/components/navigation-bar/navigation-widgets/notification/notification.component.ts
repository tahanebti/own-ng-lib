import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { OverlaySidePanelService } from 'projects/lib/src/lib';
import { NavigationNotificationComponent } from '../../../navigation-notification/navigation-notification.component';


@Component({
  selector: 'tn-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
 
})
export class NotificationComponent implements AfterViewInit, OnDestroy {

  constructor(private _overlaySidePanelService: OverlaySidePanelService) { }

  ngAfterViewInit(): void {
    this._overlaySidePanelService.setContent(NavigationNotificationComponent)
  }

  
  public show(): void {
    this._overlaySidePanelService.show();
  }

  ngOnDestroy () {
    console.log('NotificationComponent destroyed!!');
  }
}
