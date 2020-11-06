import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownMenuDirective } from './dropdown-menu.directive';
import { DropdownToggleDirective } from './dropdown-toggle.directive';
import { DropdownDirective } from './dropdown.directive';



@NgModule({
  declarations: [DropdownMenuDirective, DropdownToggleDirective, DropdownDirective],
  exports:  [DropdownMenuDirective, DropdownToggleDirective, DropdownDirective],
  imports: [
    CommonModule
  ]
})
export class DropdownModule { }
