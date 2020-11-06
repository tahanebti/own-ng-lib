import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { SingleDoubleClickDirective } from './directives/single-double-click.directive';
import { NavigationSidePanelComponent } from './components/navigation-side-panel/navigation-side-panel.component';
import { GridContainerComponent } from './components/grid/grid-container/grid-container.component';
import { GridCellComponent } from './components/grid/grid-cell/grid-cell.component';
import { GridCellDirective } from './components/grid/grid-cell.directive';
import { RouterModule } from '@angular/router';
import { NavigationBarModule } from './components/navigation-bar/navigation-bar.module';
import { TopicSearchComponent } from './components/topic-search/topic-search.component';
import { AgGridRenderComponent } from './components/ag-grid-render/ag-grid-render.component';
import { PopoverModule, TooltipModule } from 'projects/lib/src/lib';
import { CalenderEventComponent } from './components/calender-event/calender-event.component';




@NgModule({
  declarations: [
    NavigationBarComponent, 
    SingleDoubleClickDirective, 
    NavigationSidePanelComponent, 
    GridContainerComponent, 
    GridCellComponent, 
    GridCellDirective, 
    TopicSearchComponent, 
    AgGridRenderComponent, CalenderEventComponent, 
  ],
  exports:  [
    NavigationBarComponent, 
    SingleDoubleClickDirective, 
    NavigationSidePanelComponent,
    GridContainerComponent, 
    GridCellComponent,
    GridCellDirective,
    TopicSearchComponent, 
    AgGridRenderComponent, 

  ],
  imports: [
    CommonModule,
    RouterModule,
    NavigationBarModule,
    PopoverModule.forRoot({
      focusButton: 'confirm',
    }),
  ],
 
})
export class SharedModule { }
