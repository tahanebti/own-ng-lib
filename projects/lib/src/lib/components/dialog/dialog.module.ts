import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import { DialogService } from './dialog.service';



@NgModule({
  declarations: [DialogComponent],
  imports: [
    CommonModule
  ],
  exports: [DialogComponent],
  providers: [DialogService]
})
export class DialogModule { }
