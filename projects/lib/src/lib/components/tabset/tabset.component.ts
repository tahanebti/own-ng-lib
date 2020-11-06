import { AfterContentInit, Component, ContentChildren, EventEmitter, Input, OnInit, Output, QueryList } from '@angular/core';
import { TabComponent } from './tab/tab.component';

@Component({
  selector: 'tn-tabset',
  templateUrl: './tabset.component.html',
  styleUrls: ['./tabset.component.scss']
})
export class TabsetComponent implements AfterContentInit {

  @ContentChildren(TabComponent) public tabs: QueryList<TabComponent>;

  @Input() public disableStyle = false;
  @Input() public customNavClass: string = '';
  @Input() public customTabsClass: string = '';

  @Output() public onSelect = new EventEmitter();

  // contentChildren are set
  public ngAfterContentInit() {
    // get all active tabs
    const activeTabs = this.tabs.filter((tab: TabComponent) => tab.active);

    // if there is no active tab set, activate the first
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  public selectTab(tabToSelect: TabComponent): void {
    if (tabToSelect.disabled === true || tabToSelect.active === true) {
      return;
    }

    // deactivate all tabs
    this.tabs.toArray().forEach((tab: TabComponent) => tab.active = false);

    // activate the tab the user has clicked on.
    tabToSelect.active = true;
    this.onSelect.emit(this.tabs.toArray().indexOf(tabToSelect));
  }
}