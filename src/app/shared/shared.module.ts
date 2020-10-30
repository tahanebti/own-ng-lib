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
import { NavigationMessageComponent } from './components/navigation-message/navigation-message.component';



@NgModule({
  declarations: [
    NavigationBarComponent, 
    SingleDoubleClickDirective, 
    NavigationSidePanelComponent, 
    GridContainerComponent, 
    GridCellComponent, 
    GridCellDirective, 
  ],
  exports:  [
    NavigationBarComponent, 
    SingleDoubleClickDirective, 
    NavigationSidePanelComponent,
    GridContainerComponent, 
    GridCellComponent,
    GridCellDirective,

  ],
  imports: [
    CommonModule,
    RouterModule,
    NavigationBarModule
  ],
 
})
export class SharedModule { }
