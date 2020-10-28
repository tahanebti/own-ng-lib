import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tn-card-footer',
  template: `
     <ng-content></ng-content>
  `,
  styles: []
})
export class CardFooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
