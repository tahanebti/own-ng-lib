import { Directive, Host, HostListener } from '@angular/core';
import { DropdownDirective } from './dropdown.directive';

@Directive({
  selector: '[tnDropdownToggle]'
})
export class DropdownToggleDirective {

  constructor(@Host() public dropdown: DropdownDirective) { }

  @HostListener('click')
  toggle() {
    this.dropdown.toggle();
  }

}
