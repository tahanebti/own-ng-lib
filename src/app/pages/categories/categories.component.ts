import { AfterViewInit, Component, OnInit, TrackByFunction, ViewEncapsulation } from '@angular/core';
import { AgGridRenderComponent } from 'src/app/shared/components/ag-grid-render/ag-grid-render.component';
import { AddCategoryComponent } from './add-category/add-category.component';


@Component({
  selector: 'tn-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  
})
export class CategoriesComponent implements OnInit {

  rowData = [];
  frameworkComponents: any;
  rowDataClicked = {};


  placements = ['top', 'left', 'right', 'bottom'];
  popoverTitle = 'Are you sure?';
  popoverMessage = 'Are you really <b>sure</b> you want to do this?';
  confirmText = 'Yes <i class="fas fa-check"></i>';
  cancelText = 'No <i class="fas fa-times"></i>';
  confirmClicked = false;
  cancelClicked = false;
  trackByValue: TrackByFunction<string> = (index, value) => value;



  constructor() {
    this.frameworkComponents = {
      buttonRenderer: AgGridRenderComponent,
    }
   }
  

  ngOnInit(): void {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(result => result.json())
    .then(rowData => this.rowData = rowData);
  }

  columnDefs = [
    {headerName: '#', field: 'id'},
    {headerName: 'name', field: 'name', sortable: true, filter: true, editable: true},
    {headerName: 'email', field: 'email', sortable: true, filter: true,},
    {headerName: 'company', field: 'company.name', sortable: true, filter: true,},
    {headerName: 'Phone', field: 'phone', sortable: true, filter: true,},
    {headerName: 'address', field: 'address.street', sortable: true, filter: true,},
    {
      headerName: 'Action',
      cellRenderer: 'buttonRenderer',
      cellRendererParams: {
        onClick: this.onBtnClick1.bind(this),
        label: 'Click 1'
      }
    },
  ];




  onBtnClick1(e) {
    this.rowDataClicked = e.rowData;
    console.log(this.rowDataClicked)
  }


  public tabSelected(index: number): void {
    console.log('Tab ' + index + ' has been selected.');
  }

}
