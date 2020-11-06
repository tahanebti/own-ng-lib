import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipComponent } from './tooltip.component';
import { TooltipeDirective } from './tooltipe.directive';
import { OverlayModule } from '@angular/cdk/overlay';



@NgModule({
  declarations: [TooltipComponent, TooltipeDirective],
  exports:  [TooltipComponent, TooltipeDirective],
  imports: [
    CommonModule,
    OverlayModule,
  ],
  entryComponents: [TooltipComponent]
})
export class TooltipModule { }
