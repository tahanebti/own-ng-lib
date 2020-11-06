import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiSelectComponent } from './multi-select.component';

import { ListFilterPipe } from './list-filter.pipe';
import { ClickOutsideDirective } from './click-outside.directive';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MultiSelectComponent,  
    ListFilterPipe, 
    ClickOutsideDirective
  ],
  exports: [
    MultiSelectComponent,  
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [ListFilterPipe]
})
export class MultiSelectModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MultiSelectModule
    }
  }
 }
