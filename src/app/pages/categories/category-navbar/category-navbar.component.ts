import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { CalenderEventComponent } from 'src/app/shared/components/calender-event/calender-event.component';
import { TopicSearchComponent } from 'src/app/shared/components/topic-search/topic-search.component';

import { AddCategoryComponent } from '../add-category/add-category.component';


@Component({
  selector: 'tn-category-navbar',
  templateUrl: './category-navbar.component.html',
  styleUrls: ['./category-navbar.component.scss']
})
export class CategoryNavbarComponent implements OnInit, OnDestroy {


  popoverTitle = 'Popover title';
  popoverMessage = 'Popover description';
  confirmClicked = false;
  cancelClicked = false;

  constructor() { }
 
 
 
 
  ngOnInit(): void {
  }

 

  public onCreateNewTopic(): void {
   // this._OverlaySidePar.showMe(AddCategoryComponent);
  }

  public onCreateNewCalendarEvent(): void {
   //  this._OverlaySidePar.showMe(CalenderEventComponent);
  }

  public onSearchTopics(): void {
  //  this._OverlaySidePar.showMe(TopicSearchComponent);
  }


  ngOnDestroy(): void {
    console.log('Destroy Component.');
  }



}
