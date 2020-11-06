import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ConfirmationPopoverWindowOptions } from './confirmation-popover-window-options.provider';

@Component({
  selector: 'tn-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent  implements AfterViewInit {
  constructor(public options: ConfirmationPopoverWindowOptions) {}

  ngAfterViewInit(): void {
    this.options.onAfterViewInit();
  }
}