import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import {OverlayLoaderStyle, SpinnerSize } from 'projects/lib/src/lib';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AgGridRenderComponent } from 'src/app/shared/components/ag-grid-render/ag-grid-render.component';

@Component({
  selector: 'tn-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

 
  customer$: Observable<any> 
  result
  public overlayStyle: OverlayLoaderStyle = OverlayLoaderStyle.DIM_DARK;
  public spinnerSize: SpinnerSize = SpinnerSize.SMALL

  public isLoading: boolean;
   
  productForm: FormGroup;
  countries = []
  regionDelegation = []


  rowData = [];
  frameworkComponents: any;
  rowDataClicked = {};


  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private fb:FormBuilder
    ) { 
      this.productForm = this.fb.group({
        name: '',
        quantities: this.fb.array([]) ,
      });

      this.frameworkComponents = {
        buttonRenderer: AgGridRenderComponent,
      }

    }

  ngOnInit(): void {
    this.isLoading = true
    let id = this.route.snapshot.paramMap.get('id')
    console.log(id)
    this.customer$ = this.http.get('https://raw.githubusercontent.com/robconery/json-sales-data/master/data/customers.json')
    .pipe(
      map(resp => resp),
    )
    
    this.customer$.subscribe((resp: any) => {
      this.isLoading = false
      resp.map(c => {
        if(c.id == id){
          console.log(c)
          this.result = c
         
        }
      })
    })


    fetch('https://restcountries.eu/rest/v2/all')
    .then(result => result.json())
    .then(resp => this.countries = resp);

    fetch('https://gist.githubusercontent.com/marwein/75c58e05064313a5b60e/raw/b229da08ba75626f1eb946c6cb182a6ad7c1ecea/tunisia.json')
    .then(result => result.json())
    .then(resp => {
      this.regionDelegation = resp.Kairouan
      console.log(resp)
    });

  }


  quantities() : FormArray {
    return this.productForm.get("quantities") as FormArray
  }
   
  newQuantity(): FormGroup {
    return this.fb.group({
      qty: '',
      price: '',
    })
  }
   
  addQuantity() {
    this.quantities().push(this.newQuantity());
  }
   
  removeQuantity(i:number) {
    this.quantities().removeAt(i);
  }
   
  onSubmit() {
    console.log(this.productForm.value);
    
  }


  columnDefs = [
    {headerName: '#', field: 'id'},
    {headerName: 'Date', field: 'first', sortable: true, filter: true, editable: true},
    {headerName: 'Label', field: 'last', sortable: true, filter: true, editable: true},
    {headerName: 'Invoice number', field: 'company', sortable: true, filter: true,},
    {headerName: 'Debit', field: 'created_at', sortable: true, filter: true,},
    {headerName: 'Credit', field: 'country', sortable: true, filter: true,},
    {headerName: 'Balance', field: 'country', sortable: true, filter: true,},
  ];


  
  onBtnClick1(e) {
    this.rowDataClicked = e.rowData;
    console.log(this.rowDataClicked)
    this.router.navigate(['/customers', (this.rowDataClicked as any).id, 'details'])
  }


  public tabSelected(index: number): void {
    console.log('Tab ' + index + ' has been selected.');
  }


}
