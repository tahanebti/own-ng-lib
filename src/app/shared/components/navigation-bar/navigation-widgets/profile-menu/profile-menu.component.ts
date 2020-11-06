import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DropdownDirective, TOGGLE_STATUS } from 'projects/lib/src/lib';
import { MenuService } from 'projects/lib/src/lib/components/context-menu/menu.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NavigationProfileMenuComponent } from '../../../navigation-profile-menu/navigation-profile-menu.component';
import { WIDGET } from '../widget.token';

@Component({
  selector: 'tn-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss'],
 
})
export class ProfileMenuComponent implements  OnInit, OnDestroy {

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
