import { Directive, ElementRef, Renderer2 , } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { TOGGLE_STATUS } from './toggle-status';

@Directive({
  selector: '[tnDropdown]'
})
export class DropdownDirective {

  private status: TOGGLE_STATUS = TOGGLE_STATUS.CLOSE;
  private status$: Subject<TOGGLE_STATUS> = new Subject<TOGGLE_STATUS>();

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) { }

  setActive(active = true) {
      this.renderer.addClass(this.elementRef.nativeElement, 'active');
  }

  toggle() {
    if (this.status === TOGGLE_STATUS.OPEN) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    this.renderer.addClass(this.elementRef.nativeElement, 'open');
    if (this.status !== TOGGLE_STATUS.OPEN) {
      this.status$.next(TOGGLE_STATUS.OPEN);
    }
    this.status = TOGGLE_STATUS.OPEN;
  }

  close() {
    this.renderer.removeClass(this.elementRef.nativeElement, 'open');
    this.renderer.addClass(this.elementRef.nativeElement, 'close');
    if (this.status !== TOGGLE_STATUS.CLOSE) {
      this.status$.next(TOGGLE_STATUS.CLOSE);
    }
    this.status = TOGGLE_STATUS.CLOSE;
  }

  statusChange(): Observable<TOGGLE_STATUS> {
    return this.status$.asObservable();
  }

}
