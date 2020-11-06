import { Component, OnDestroy, OnInit } from '@angular/core';
import { CalenderEventComponent } from 'src/app/shared/components/calender-event/calender-event.component';
import { TopicSearchComponent } from 'src/app/shared/components/topic-search/topic-search.component';

@Component({
  selector: 'tn-customer-navbar',
  templateUrl: './customer-navbar.component.html',
  styleUrls: ['./customer-navbar.component.scss']
})
export class CustomerNavbarComponent implements OnInit, OnDestroy {


  popoverTitle = 'Popover title';
  popoverMessage = 'Popover description';
  confirmClicked = false;
  cancelClicked = false;

  constructor() { }
 
 
 
 
  ngOnInit(): void {
  }

 


  public onCreateNewCalendarEvent(): void {
  // this._OverlaySidePar.showMe(CalenderEventComponent);
  }

  public onSearchTopics(): void {
   // this._OverlaySidePar.showMe(TopicSearchComponent);
  }


  ngOnDestroy(): void {
    console.log('Destroy Component.');
  }



}
