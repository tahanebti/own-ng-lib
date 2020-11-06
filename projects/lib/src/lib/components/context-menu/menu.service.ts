import { Injectable, Type } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private _isMenuVisible: boolean;
  private _closeMenuSource: BehaviorSubject<boolean>;

  private _contentChangeSource: Subject<Type<any>>;




  constructor(){
    this._isMenuVisible = false;
    this._closeMenuSource = new BehaviorSubject(this._isMenuVisible);
    this._contentChangeSource = new Subject<any>();
  }

  public onMenuVisiblityChange(): Observable<any>{
    return this._closeMenuSource.asObservable()
  }

  public onContentChange(): Observable<any>{
    return this._contentChangeSource.asObservable()
  }

  public setContent(content: Type<any>): void{

    this._contentChangeSource.next(content)
  }

  public show(): void{
    this._isMenuVisible = true;
    this._closeMenuSource.next(this._isMenuVisible)
 
  }

  public close(): void{
    this._isMenuVisible = false;
    this._closeMenuSource.next(this._isMenuVisible)
  }




}
