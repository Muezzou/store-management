import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  @Input() data!: Data;

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit(): void {

  }

  onSubmit(){
    this.productService.addProduct(this.data)
    .subscribe((id)=>this.router.navigate(['/products', id]))
  }
}
