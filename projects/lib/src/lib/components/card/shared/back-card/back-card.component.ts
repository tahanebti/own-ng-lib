import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tn-back-card',
  template: `
     <ng-content></ng-content>
  `,
  styles: []
})
export class BackCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
