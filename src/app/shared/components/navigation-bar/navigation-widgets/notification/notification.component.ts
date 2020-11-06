import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DropdownDirective, TOGGLE_STATUS } from 'projects/lib/src/lib';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NavigationNotificationComponent } from '../../../navigation-notification/navigation-notification.component';


@Component({
  selector: 'tn-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
 
})
export class NotificationComponent implements  OnInit, OnDestroy {

  ngUnsubscribe: Subject<void> = new Subject<void>();

  @ViewChild('myDropdown') myDropdown: DropdownDirective;

  ngOnInit() {
    this.myDropdown.statusChange()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((status: TOGGLE_STATUS) => {
        let statusValue: String;
        /* tslint:disable:no-console */
        if (status === TOGGLE_STATUS.OPEN) {
          statusValue = 'Opened';
        } else if (status === TOGGLE_STATUS.CLOSE) {
          statusValue = 'Closed';
        }
        console.info(`Dropdown status changed to "${statusValue}".`);
        /* tslint:enable:no-console */
      });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next(),
    this.ngUnsubscribe.complete();
  }

}
