import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BadgeColor, BadgePosition, BadgeShape, BadgeSize, BadgeStyle, ButtonColor, ButtonShape, ButtonSize, ButtonStyle, CardType, FlipAxis, OverlayLoaderStyle, SpinnerSize } from 'projects/lib/src/lib';
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
  
  public BadgeColor = BadgeColor;
  public BadgeSize = BadgeSize;
  public BadgeStyle = BadgeStyle;
  public BadgeShape = BadgeShape;
  public BadgePosition = BadgePosition.TOP_RIGHT;


  constructor(

    private _dialogService: DialogService
  ) { }

  ngOnInit(): void {
        setTimeout(() => this.isLoading = false, 3000);
  }

  ngAfterViewInit() {
   
    this._dialogService.setContent(HomeDialogComponent)
  }

  public show(): void {
   
  }

  public showDialog(): void{
    this._dialogService.show()
  }

}
