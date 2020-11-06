import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';



@Component({
  selector: 'tn-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

  
  constructor(

    ) {

  }
 
ngOnInit(): void {

}

ngOnDestroy(): void {
  console.log('Method not implemented.');
}


}