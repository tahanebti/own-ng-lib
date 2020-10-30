import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MenuService } from 'projects/lib/src/lib/components/context-menu/menu.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SidePanelService, SidePanelState } from 'src/app/core';
import { NavigationNotificationComponent } from '../navigation-notification/navigation-notification.component';
import { NavigationProfileMenuComponent } from '../navigation-profile-menu/navigation-profile-menu.component';

@Component({
  selector: 'tn-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  private _subscriptionsSubject$: Subject<void>;
  public currentPanelState: SidePanelState;

  constructor(
    private _sidePanelService: SidePanelService,

    ) {
    this._subscriptionsSubject$ = new Subject<void>();
  }
 

  ngOnInit(): void {
    this._sidePanelService
      ._panelStateChanges
      .pipe(takeUntil(this._subscriptionsSubject$))
      .subscribe((state: SidePanelState) => this.currentPanelState = state);
  }

 

  public handleSingleClick(): void {
    if (this.currentPanelState === SidePanelState.CLOSE || this.currentPanelState === SidePanelState.COLLAPSE) {
      this._sidePanelService.changeState(SidePanelState.OPEN);
    } else { 
      this._sidePanelService.changeState(SidePanelState.COLLAPSE);
    }
  }

  public handleDoubleClick(): void {
    if (this.currentPanelState === SidePanelState.CLOSE) {
      this._sidePanelService.changeState(SidePanelState.OPEN)
    } else {
      this._sidePanelService.changeState(SidePanelState.CLOSE);
    }
  }

  ngOnDestroy(): void {
    this._subscriptionsSubject$.next();
    this._subscriptionsSubject$.complete();
  }

 

}
