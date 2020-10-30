import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'tn-navigation-widget-wrapper',
  templateUrl: './navigation-widget-wrapper.component.html',
  styleUrls: ['./navigation-widget-wrapper.component.scss']
})
export class NavigationWidgetWrapperComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy () {
    console.log('NavigationWidgetWrapperComponent destroyed!!');
  }

}
