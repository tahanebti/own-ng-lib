import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MenuService } from 'projects/lib/src/lib/components/context-menu/menu.service';
import { NavigationProfileMenuComponent } from '../../../navigation-profile-menu/navigation-profile-menu.component';
import { WIDGET } from '../widget.token';

@Component({
  selector: 'tn-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss'],
 
})
export class ProfileMenuComponent implements  AfterViewInit {

  constructor(private _menuService: MenuService) { }

  ngAfterViewInit(): void {
    this._menuService.setContent(NavigationProfileMenuComponent)
  }

  
  public showMenu(): void {
    console.log("showMenu")
    this._menuService.show();
  }


}
