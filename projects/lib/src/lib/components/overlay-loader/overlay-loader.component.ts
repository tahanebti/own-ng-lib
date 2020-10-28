import { Component, Input, OnInit } from '@angular/core';
import { FADE_IN_OUT } from '../_shared/animations/fade-in-out.animation';
import { OverlayLoaderStyle } from './overlay-loader-style.enum';
import { SpinnerSize } from './spinner-size.enum';

@Component({
  selector: 'tn-overlay-loader',
  templateUrl: './overlay-loader.component.html',
  styleUrls: ['./overlay-loader.component.scss'],
  animations: [FADE_IN_OUT]
})
export class OverlayLoaderComponent implements OnInit {

  @Input()
  public isLoading: boolean;

  @Input()
  public overlayStyle: OverlayLoaderStyle;

  @Input()
  public spinnerSize: SpinnerSize;

  constructor() {
    this.spinnerSize = SpinnerSize.MEDIUM;
    this.overlayStyle = OverlayLoaderStyle.DIM_DARK;
    this.isLoading = false;
  }

  ngOnInit(): void {
  }

}
