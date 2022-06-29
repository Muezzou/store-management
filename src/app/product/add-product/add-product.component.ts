import { Component, OnInit } from '@angular/core';

import { Data, Product } from '../product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  data!: Data;

  constructor() { }

  ngOnInit(): void {
    this.data = {
      title: "", 
      category: "", 
      price: 0, 
      employee: "",
      description: "",
      reviews: []
    }
  }

}
