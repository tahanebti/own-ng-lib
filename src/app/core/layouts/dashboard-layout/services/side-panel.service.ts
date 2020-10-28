import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SidePanelPosition } from '../models/side-panel-positon.enum';
import { SidePanelState } from '../models/side-panel-state.enum';

@Injectable({
  providedIn: 'root'
})
export class SidePanelService {

  private _panelSate: SidePanelState
  private _panelStateSource: BehaviorSubject<SidePanelState>;
  public _panelStateChanges: Observable<SidePanelState> 

  constructor() { 
    this._panelSate = SidePanelState.OPEN
    this._panelStateSource = new BehaviorSubject<SidePanelState>(this._panelSate)
    this._panelStateChanges = this._panelStateSource.asObservable()
  }

  public changeState(state: SidePanelState){
    this._panelSate = state;
    this._panelStateSource.next(this._panelSate)
  }

}
