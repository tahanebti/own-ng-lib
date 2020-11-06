import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'tn-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent {
  @Input() public tabTitle: string;
  @Input() public tabSubTitle: string;
  @Input() public active = false;
  @Input() public disabled = false;
  @Input() public bypassDOM = false;
  @Input() public customPaneClass: string = '';
  @ContentChild(TemplateRef) template: TemplateRef<any>;
}