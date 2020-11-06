import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ComponentFactoryResolver, HostBinding, HostListener, Input, OnDestroy, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DialogService } from './dialog.service';
import { OverlayDialogStyle } from './overlay-dialog-style.enum';

@Component({
  selector: 'tn-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  animations: [
    trigger('window', [
        state('inactive', style({
            transform: 'translate3d(0, 50px, 0)',
            opacity: '0'
        })),
        state('active', style({
            transform: 'translate3d(0, 0, 0)',
            opacity: '1'
        })),
        transition('inactive => active', animate('{{transition}}ms ease-in')),
        transition('active => inactive', animate('{{transition}}ms ease-out'))
    ]),
],
})
  
export class DialogComponent implements OnInit, OnDestroy {

  @ViewChild('content', { read: ViewContainerRef }) 
  public dialogContentRef: ViewContainerRef;

  @Input()
  public overlayStyle: OverlayDialogStyle

  public isDialogVisible: boolean

  public _dialogServiceSubject$: Subject<void>

  state: string = 'inactive';
    states: string = 'inactive';
    transition: number = 200;
  

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
      .subscribe((visible: boolean) => {
        this.isDialogVisible = visible
        this.state = 'active';
        this.states = 'active';
      })

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
    this.state = 'inactive';
    this.states = 'inactive';
  }

  ngOnDestroy() {
    this._dialogServiceSubject$.next()
    this._dialogServiceSubject$.complete()
  }

}
