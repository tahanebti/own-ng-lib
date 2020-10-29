import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SidePanelService, SidePanelState } from 'src/app/core';
import { Config, NavigationLink } from '../navigation-link';

@Component({
  selector: 'tn-navigation-side-panel',
  templateUrl: './navigation-side-panel.component.html',
  styleUrls: ['./navigation-side-panel.component.scss']
})
export class NavigationSidePanelComponent implements OnInit, OnDestroy {

  @Input()
  public links: NavigationLink[];
  public config: Config;
  
  private _subscriptionsSubject$: Subject<void>;
  public currentPanelState: SidePanelState;
  public SidePanelState = SidePanelState;

  constructor(private _sidePanelService: SidePanelService) {
    this._subscriptionsSubject$ = new Subject<void>();
  }

  ngOnInit(): void {
    this._sidePanelService._panelStateChanges
      .pipe(takeUntil(this._subscriptionsSubject$))
      .subscribe((state: SidePanelState) => this.currentPanelState = state);
  }

  toggle(index: number) {
    console.log(index)
    // if (!this.config.multi) {
    //   this.links.filter(
    //     (menu, i) => i !== index && menu.active
    //   ).forEach(menu => menu.active = !menu.active);
    // }


    this.links[index].active = !this.links[index].active;
  }

  ngOnDestroy(): void {
    this._subscriptionsSubject$.next();
    this._subscriptionsSubject$.complete();
  }

}
