import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'tn-company-settings',
  templateUrl: './company-settings.component.html',
  styleUrls: ['./company-settings.component.scss']
})
export class CompanySettingsComponent implements OnInit {

  productForm: FormGroup;
  countries = []
  regionDelegation = []
  constructor(private fb:FormBuilder) {
   
    this.productForm = this.fb.group({
      name: '',
      quantities: this.fb.array([]) ,
    });
  }

  ngOnInit(): void {
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

}
