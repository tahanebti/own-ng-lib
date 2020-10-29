import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from './badge.component';
import { BadgePosition } from './badge-position.enum';



@NgModule({
  declarations: [BadgeComponent],
  imports: [
    CommonModule
  ],
  exports: [BadgeComponent]
})
export class BadgeModule { }
