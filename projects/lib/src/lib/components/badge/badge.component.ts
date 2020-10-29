import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { BadgeColor } from './badge-color.enum';
import { BadgePosition } from './badge-position.enum';
import { BadgeShape } from './badge-shape-enum';
import { BadgeSize } from './badge-size.enum';
import { BadgeStyle } from './badge-style.enum';




@Component({
  selector: 'div[tnBadge],span[tnBadge],a[tnBadge],input[tnBadge],button[tnBadge]',
  template: `
  <ng-content></ng-content>
  `,
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent  {

  @Input() style : BadgeStyle;
  @Input() size : BadgeSize;
  @Input() shape : BadgeShape;
  @Input() position : BadgePosition;
  @Input() color : BadgeColor

  constructor() {
    this.style = BadgeStyle.SOLID;
    this.size = BadgeSize.SMALL;
    this.shape = BadgeShape.SQUARED;
    this.position = BadgePosition.TOP_CENTER
    this.color = BadgeColor.WARNING
   }

  @HostBinding('class')
  get classes(): string {
    return `${this.style} ${this.size} ${this.shape} ${this.color}  ${this.position}`
  }

}
