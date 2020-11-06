import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

import { NavigationMessageComponent } from '../../../navigation-message/navigation-message.component';

@Component({
  selector: 'tn-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit, OnDestroy {

  
  constructor() { }
  
  ngOnInit(): void {
    
  }

  
  public show(): void {
   // this._overlaySidePanelService.showMe(NavigationMessageComponent);
  }

  ngOnDestroy () {
    console.log('MessageComponent destroyed!!');
  }

}
