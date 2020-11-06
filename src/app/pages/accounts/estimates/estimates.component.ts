import { Component, OnInit, TrackByFunction } from '@angular/core';
import { Router } from '@angular/router';
import { AgGridRenderComponent } from 'src/app/shared/components/ag-grid-render/ag-grid-render.component';

@Component({
  selector: 'tn-estimates',
  templateUrl: './estimates.component.html',
  styleUrls: ['./estimates.component.scss']
})
export class EstimatesComponent implements OnInit {

  
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
    {headerName: 'Estimate number', field: 'first', sortable: true, filter: true, editable: true},
    {headerName: 'Client', field: 'company', sortable: true, filter: true, editable: true},
    {headerName: 'Estimate Date ', field: 'created_at', sortable: true, filter: true,},
    {headerName: 'Expire Date', field: 'created_at', sortable: true, filter: true,},
    {headerName: 'Amounts', field: 'country', sortable: true, filter: true,},
    {headerName: 'Satuts', field: 'country', sortable: true, filter: true,},
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
    this.router.navigate(['/dashboard', 'accounts', 'payments', (this.rowDataClicked as any).id, 'details'])
  }


  public tabSelected(index: number): void {
    console.log('Tab ' + index + ' has been selected.');
  }


}
