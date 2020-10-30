import { Component, ComponentFactoryResolver, Input, OnDestroy, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { FADE_IN_OUT } from '../_shared/animations/fade-in-out.animation';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MenuService } from './menu.service';
import { OverlayConextMenuStyle } from './Overlay-conext-menu.enum';

@Component({
  selector: 'tn-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss'],
  animations: [FADE_IN_OUT]
})
export class ContextMenuComponent implements OnInit, OnDestroy {

  @ViewChild('content', { read: ViewContainerRef }) 
  public menuContentRef: ViewContainerRef;

  @Input()
  public overlayStyle: OverlayConextMenuStyle

  public isMenuVisible: boolean

  public _menuServiceSubject$: Subject<void>

  constructor(
    private cfr: ComponentFactoryResolver,
    private _menuService: MenuService
  ) { 
    this._menuServiceSubject$ = new Subject<void>();
    this.overlayStyle = OverlayConextMenuStyle.TRANSPARENT
  }

  

  ngOnInit(): void {
      this._menuService.onMenuVisiblityChange()
        .pipe(takeUntil(this._menuServiceSubject$))
        .subscribe((visible: boolean) => this.isMenuVisible = visible)

      this._menuService.onContentChange()
        .pipe(takeUntil(this._menuServiceSubject$))
        .subscribe((component: Type<any>) => this._setMenu(component))  

  }


  private _setMenu(component: Type<any>): void {
    const componentFactory = this.cfr.resolveComponentFactory(component)
    this.menuContentRef.clear()
    this.menuContentRef.createComponent(componentFactory)
  }


  public close(): void {
    this._menuService.close();
  }

  ngOnDestroy() {
    this._menuServiceSubject$.next()
    this._menuServiceSubject$.complete()
  }

}
