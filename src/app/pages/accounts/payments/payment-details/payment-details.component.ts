import { Component, OnInit } from '@angular/core';
import { AgGridRenderComponent } from 'src/app/shared/components/ag-grid-render/ag-grid-render.component';

@Component({
  selector: 'tn-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss']
})
export class PaymentDetailsComponent implements OnInit {

  rowData = [];
  frameworkComponents: any;
  rowDataClicked = {};


  constructor() {
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

  public show(): void{
    // this._orverlySidePanelService.showMe(CustomerCreateComponent)
   }
 
   onBtnClick1(e) {
     this.rowDataClicked = e.rowData;
     console.log(this.rowDataClicked)
   //  this.router.navigate(['/accounts', 'payments', (this.rowDataClicked as any).id, 'details'])
   }
 
 
   public tabSelected(index: number): void {
     console.log('Tab ' + index + ' has been selected.');
   }

}
