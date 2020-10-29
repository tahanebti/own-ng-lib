import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ButtonColor, ButtonShape, ButtonSize, ButtonStyle, CardType, FlipAxis, OverlayLoaderStyle, OverlaySidePanelService, SpinnerSize } from 'projects/lib/src/lib';
import { DialogService } from 'projects/lib/src/lib/components/dialog/dialog.service';
import { HomeDialogComponent } from './home-dialog/home-dialog.component';
import { HomeSidePanelComponent } from './home-side-panel/home-side-panel.component';

@Component({
  selector: 'tn-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,  AfterViewInit {

  public CardType = CardType;
  public FlipAxis = FlipAxis;

  public overlayStyle: OverlayLoaderStyle = OverlayLoaderStyle.DIM_DARK;
  public spinnerSize: SpinnerSize = SpinnerSize.SMALL

  public isLoading: boolean = true;

  public ButtonColor = ButtonColor;
  public ButtonSize = ButtonSize;
  public ButtonStyle = ButtonStyle;
  public ButtonShape = ButtonShape;
  

  constructor(
    private _overlaySidePanelService: OverlaySidePanelService,
    private _dialogService: DialogService
  ) { }

  ngOnInit(): void {
        setTimeout(() => this.isLoading = false, 3000);
  }

  ngAfterViewInit() {
    this._overlaySidePanelService.setContent(HomeSidePanelComponent);
    this._dialogService.setContent(HomeDialogComponent)
  }

  public show(): void {
    this._overlaySidePanelService.show();
  }

  public showDialog(): void{
    this._dialogService.show()
  }

}
