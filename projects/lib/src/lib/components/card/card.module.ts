import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { CardBodyComponent } from './card-body.component';
import { CardFooterComponent } from './card-footer.component';
import { CardHeaderComponent } from './card-header.component';
import { FlipCardComponent } from './flip-card/flip-card.component';
import { FrontCardComponent } from './shared/front-card/front-card.component';
import { BackCardComponent } from './shared/back-card/back-card.component';



@NgModule({
  declarations: [
    CardComponent, 
    CardBodyComponent, 
    CardFooterComponent, 
    CardHeaderComponent, 
    FlipCardComponent, 
    FrontCardComponent, 
    BackCardComponent
  ],
  exports: [
    CardComponent, 
    CardBodyComponent, 
    CardFooterComponent, 
    CardHeaderComponent,
    FlipCardComponent, 
    FrontCardComponent, 
    BackCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CardModule { }
