import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsetComponent } from './tabset.component';
import { TabComponent } from './tab/tab.component';




@NgModule({
  declarations: [TabsetComponent, TabComponent, ],
  exports : [TabsetComponent, TabComponent, ],
  imports: [
    CommonModule
  ]
})
export class TabsetModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: TabsetModule,
      providers: []
    };
  }

  /**
   * Use in features modules with lazy loading: new instance of TnTabset.
   */
  public static forChild(): ModuleWithProviders {
    return {
      ngModule: TabsetModule,
      providers: []
    };
  }
 }
