import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { ButtonColor } from './button-color.enum';
import { ButtonShape } from './button-shape.enum';
import { ButtonSize } from './button-size.enum';
import { ButtonStyle } from './button-style.enum';

@Component({
  selector: 'div[tnButton],span[tnButton],a[tnButton],input[tnButton],button[tnButton]',
  template: `
     <ng-content></ng-content>
  `,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent  {

  @Input()
  public style: ButtonStyle;

  @Input()
  public size: ButtonSize;

  @Input()
  public shape: ButtonShape;

  @Input()
  public color: ButtonColor;

  constructor() {
    this.style = ButtonStyle.SOLID;
    this.size = ButtonSize.MEDIUM;
    this.shape = ButtonShape.ROUNDED;
    this.color = ButtonColor.DEFAULT;
  }

  @HostBinding('class')
  get classes(): string {
    return `${this.style} ${this.size} ${this.shape} ${this.color}`
  }

}
