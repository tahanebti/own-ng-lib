import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tn-front-card',
  template: `
     <ng-content></ng-content>
  `,
  styles: []
})
export class FrontCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
