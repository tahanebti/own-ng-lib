import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DropdownDirective, TOGGLE_STATUS } from 'projects/lib/src/lib';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { ProductFilterComponent } from '../product-filter/product-filter.component';

@Component({
  selector: 'tn-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {

  ngUnsubscribe: Subject<void> = new Subject<void>();
  @ViewChild('myDropdown') myDropdown: DropdownDirective;


 
  myForm:FormGroup;
  disabled = false;
  ShowFilter = false;
  limitSelection = false;
  cities = [];
  selectedItems = [];
  dropdownSettings: any = {};
  constructor(

    private fb: FormBuilder,
    private router : Router
    ) {

  }

ngOnInit(): void {
    this.cities = [
        { item_id: 1, item_text: 'New Delhi' },
        { item_id: 2, item_text: 'Mumbai' },
        { item_id: 3, item_text: 'Bangalore' },
        { item_id: 4, item_text: 'Pune' },
        { item_id: 5, item_text: 'Chennai' },
        { item_id: 6, item_text: 'Navsari' }
    ];
    this.selectedItems = [{ item_id: 4, item_text: 'Pune' }, { item_id: 6, item_text: 'Navsari' }];
    this.dropdownSettings = {
        singleSelection: false,
        idField: 'item_id',
        textField: 'item_text',
        selectAllText: 'Select All',
        unSelectAllText: 'UnSelect All',
        itemsShowLimit: 3,
        allowSearchFilter: this.ShowFilter
    };
    this.myForm = this.fb.group({
        city: [this.selectedItems]
    });


    this.myDropdown.statusChange()
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe((status: TOGGLE_STATUS) => {
      let statusValue: String;
      /* tslint:disable:no-console */
      if (status === TOGGLE_STATUS.OPEN) {
        statusValue = 'Opened';
      } else if (status === TOGGLE_STATUS.CLOSE) {
        statusValue = 'Closed';
      }
      console.info(`Dropdown status changed to "${statusValue}".`);
      /* tslint:enable:no-console */
    });
}

OnSubmit(){
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Your work has been saved',
    showConfirmButton: false,
    timer: 1500
  })


}

onItemSelect(item: any) {
console.log('onItemSelect', item);
}
onSelectAll(items: any) {
console.log('onSelectAll', items);
}
toogleShowFilter() {
this.ShowFilter = !this.ShowFilter;
this.dropdownSettings = Object.assign({}, this.dropdownSettings, { allowSearchFilter: this.ShowFilter });
}

handleLimitSelection() {
if (this.limitSelection) {
  this.dropdownSettings = Object.assign({}, this.dropdownSettings, { limitSelection: 2 });
} else {
  this.dropdownSettings = Object.assign({}, this.dropdownSettings, { limitSelection: null });
}
}


public showMe(): void{
 // this._orverlySidePanelService.showMe(ProductFilterComponent)
}




ngOnDestroy() {
  this.ngUnsubscribe.next(),
  this.ngUnsubscribe.complete();
}


}
