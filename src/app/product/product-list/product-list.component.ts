import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = [];

  gridView: boolean = true
  
  constructor(private router: Router, 
              private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProductList()
    .subscribe(productList => this.productList = productList);
  }

  goToProduct(product: Product){
    this.router.navigate(['products', product.id]);
  }

  changeView(){
    this.gridView = (this.gridView ? false : true);
  }
}
