import { Injectable } from '@angular/core';

export interface NbMenuBag { tag: string; item: TnMenuItem }


export class TnMenuItem {
  title: string;
  link?: string;
  url?: string;
  icon?: string;
  expand?: boolean;
  children?: TnMenuItem[];
  
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }
}
