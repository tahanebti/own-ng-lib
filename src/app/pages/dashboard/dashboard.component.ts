import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertType, ProgressBarService, ToasterPosition, ToasterService, ToggleSwitchColor, ToggleSwitchShape, ToggleSwitchSize } from 'projects/lib/src/lib';
import { ToastType } from 'projects/lib/src/lib/components/toaster/toast-type.enum';
import { take } from 'rxjs/operators';

import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop'

@Component({
  selector: 'tn-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public AlertType = AlertType;
  public isPrimaryVisible: boolean;

  public alertType: AlertType;
  public isUpdating: boolean;
  public alertVisible: boolean;
  public alertMessage: string;
  public alertDismissible: boolean;
  public alertIconClass: string;

  public ToggleSwitchColor = ToggleSwitchColor;
  public ToggleSwitchShape = ToggleSwitchShape;
  public ToggleSwitchSize = ToggleSwitchSize;

  public isChecked: boolean = false;

  public form: FormGroup;
  public toggleForm: any = {
    isActive: false
  };

  
  public ToastType = ToastType;
  public tosterPosition: ToasterPosition = ToasterPosition.BOTTOM_RIGHT




  constructor(
    private _progressBarService: ProgressBarService,
    private _toasterService: ToasterService,
    private _formBuilder: FormBuilder
    ) { 
    this.isPrimaryVisible = false;

    this.isUpdating = false;
    this.alertVisible = false;
    this.alertType = AlertType.SUCCESS
    this.alertMessage = "Update was successful!";
    this.alertIconClass = "fas fa-info-circle";
    this.alertDismissible = false;
  }

  ngOnInit(): void {
    setTimeout(() => this.isPrimaryVisible = true, 2000);
    setTimeout(() => this.isPrimaryVisible = false, 4000);

    this.form = this._formBuilder.group({
      isActive: [false]
    });

    this.toggleForm = {
      isActive: null
    }


  }

  public loadData(): void {
    this._progressBarService.onProgressComplete()
      .pipe(take(1))
      .subscribe(complete => {
        this.isUpdating = false;
        this.alertVisible = true;
        setTimeout(() => this.alertVisible = false, 2000);
      });
    this.isUpdating = true;
    this._progressBarService.updateProgress(12);
    setTimeout(() => this._progressBarService.updateProgress(45), 2000);
    setTimeout(() => this._progressBarService.updateProgress(73), 4000);
    setTimeout(() => this._progressBarService.updateProgress(100), 5000);
  }


  public sendToast(message: string, type: ToastType) {
    this._toasterService.toast(message, type)
  }

  public print() {
    console.log(this.form.value);
  }


  backlog = [
    'fix bug',
    'implement authentication',
    'buy coffee',
    'learn Angular',
    'learn Angular CDK'
  ];

  sprint = [
    'setup project'
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

}
