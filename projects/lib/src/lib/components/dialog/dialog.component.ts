import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ComponentFactoryResolver, Input, OnDestroy, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FADE_IN_OUT } from '../_shared/animations/fade-in-out.animation';
import { DialogService } from './dialog.service';
import { OverlayDialogStyle } from './overlay-dialog-style.enum';

@Component({
  selector: 'tn-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})
export class DialogComponent implements OnInit, OnDestroy {

  @ViewChild('content', { read: ViewContainerRef }) 
  public dialogContentRef: ViewContainerRef;

  @Input()
  public overlayStyle: OverlayDialogStyle

  public isDialogVisible: boolean

  public _dialogServiceSubject$: Subject<void>

  constructor(
    private cfr: ComponentFactoryResolver,
    private _dialogService: DialogService
  ) { 
    this._dialogServiceSubject$ = new Subject<void>()
    this.overlayStyle = OverlayDialogStyle.DIM_DARK
  }

  ngOnInit(): void {
    this._dialogService.onDialogVisiblityChange()
      .pipe(takeUntil(this._dialogServiceSubject$))
      .subscribe((visible: boolean) => this.isDialogVisible = visible)

    this._dialogService.onContentChange()
      .pipe(takeUntil(this._dialogServiceSubject$))
      .subscribe((component: Type<any>) => this._setDialog(component))

  }
  private _setDialog(component: Type<any>): void {
    const componentFactory = this.cfr.resolveComponentFactory(component)
    this.dialogContentRef.clear()
    this.dialogContentRef.createComponent(componentFactory)
  }

  public close(): void {
    this._dialogService.close();
  }

  ngOnDestroy() {
    this._dialogServiceSubject$.next()
    this._dialogServiceSubject$.complete()
  }

}
