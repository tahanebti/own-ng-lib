import { Directive, ElementRef, Input, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[tnFocus]'
})
export class FocucsDirective {

  @Input() tnFocus: boolean;

  constructor(private elm: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.tnFocus && this.tnFocus === true) {
      this.elm.nativeElement.focus();
    }
  }

}
