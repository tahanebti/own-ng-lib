import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tn-card-body',
  template: `
    <ng-content></ng-content>
  `,
  styles: []
})
export class CardBodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
