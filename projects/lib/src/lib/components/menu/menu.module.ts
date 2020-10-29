import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MenuService } from './menu.service';
import { BadgeModule } from '../badge/badge.module';



@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    BadgeModule
  ],
  exports: [MenuModule],
  providers: [MenuService]
})
export class MenuModule { }
