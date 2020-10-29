import { Injectable, Type } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  private _isDialogVisible: boolean;
  private _closeDialogSource: BehaviorSubject<boolean>;

  private _contentChangeSource: Subject<Type<any>>;

  constructor(){
    this._isDialogVisible = false;
    this._closeDialogSource = new BehaviorSubject(this._isDialogVisible);
    this._contentChangeSource = new Subject<any>();
  }

  public onDialogVisiblityChange(): Observable<any>{
    return this._closeDialogSource.asObservable()
  }

  public onContentChange(): Observable<any>{
    return this._contentChangeSource.asObservable()
  }

  public setContent(content: Type<any>): void{
    console.log(content)
    this._contentChangeSource.next(content)
  }

  public show(): void{
    this._isDialogVisible = true;
    this._closeDialogSource.next(this._isDialogVisible)
    console.log(this._isDialogVisible)
  }

  public close(): void{
    this._isDialogVisible = false;
    this._closeDialogSource.next(this._isDialogVisible)
  }

}
