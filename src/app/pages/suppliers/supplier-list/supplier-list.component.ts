import { Component, OnInit, TrackByFunction } from '@angular/core';
import { Router } from '@angular/router';
import { AgGridRenderComponent } from 'src/app/shared/components/ag-grid-render/ag-grid-render.component';

@Component({
  selector: 'tn-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.scss']
})
export class SupplierListComponent implements OnInit {

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



  constructor(
    private router: Router
    ) {
    this.frameworkComponents = {
      buttonRenderer: AgGridRenderComponent,
    }
   }
  

  ngOnInit(): void {
    fetch('https://raw.githubusercontent.com/robconery/json-sales-data/master/data/customers.json')
    .then(result => result.json())
    .then(rowData => this.rowData = rowData);
  }

  columnDefs = [
    {headerName: '#', field: 'id'},
    {headerName: 'Firstname', field: 'first', sortable: true, filter: true, editable: true},
    {headerName: 'Lastname', field: 'last', sortable: true, filter: true, editable: true},
    {headerName: 'Company', field: 'company', sortable: true, filter: true,},
    {headerName: 'Created At', field: 'created_at', sortable: true, filter: true,},
    {headerName: 'Country', field: 'country', sortable: true, filter: true,},
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
    this.router.navigate(['/dashboard', 'suppliers', (this.rowDataClicked as any).id, 'details'])
  }


  public tabSelected(index: number): void {
    console.log('Tab ' + index + ' has been selected.');
  }


}
