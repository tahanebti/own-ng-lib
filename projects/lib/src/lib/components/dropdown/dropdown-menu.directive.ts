import { Directive, ElementRef, Host } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DropdownDirective } from './dropdown.directive';
import { TOGGLE_STATUS } from './toggle-status';

@Directive({
  selector: '[tnDropdownMenu]'
})
export class DropdownMenuDirective {

  ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(
    @Host() public dropdown: DropdownDirective,
    private elementRef: ElementRef,
  ) { }

  ngOnInit() {
    this.dropdown.statusChange()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((newStatus: TOGGLE_STATUS) => {
        if (newStatus === TOGGLE_STATUS.OPEN) {
          // Listen to click events to realise when to close the dropdown.
          document.addEventListener('click', this.onDocumentClick.bind(this), true);
        } else {
          document.removeEventListener('click', this.onDocumentClick, true);
        }
      });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();

    document.removeEventListener('click', this.onDocumentClick, true);
  }

  onDocumentClick(event: MouseEvent) {
    const target: EventTarget = event.target;
    if (target instanceof HTMLElement && target.hasAttribute('dropdownToggle')) {
      // Ignore dropdownToggle element, even if it's outside the menu.
      return;
    }
    const isInsideClick = this.elementRef.nativeElement.contains(target);
    if (!isInsideClick || target instanceof HTMLElement && target.hasAttribute('href')) {
      this.dropdown.close();
    } else {
      this.dropdown.open();
    }
  }

}
