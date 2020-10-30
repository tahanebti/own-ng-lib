import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { OverlaySidePanelService } from 'projects/lib/src/lib';
import { NavigationMessageComponent } from '../../../navigation-message/navigation-message.component';

@Component({
  selector: 'tn-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements  AfterViewInit , OnDestroy{

  constructor(private _overlaySidePanelService: OverlaySidePanelService) { }

  ngAfterViewInit(): void {
    this._overlaySidePanelService.setContent(NavigationMessageComponent)
  }

  
  public show(): void {
    this._overlaySidePanelService.show();
  }

  ngOnDestroy () {
    console.log('MessageComponent destroyed!!');
  }

}
