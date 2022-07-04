import { Data, Product } from './../product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

declare var $:any;
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  product!: Product|undefined;
  data!: Data|undefined;
  ctrlReview!: FormControl;

  constructor(private route: ActivatedRoute, 
              private router: Router,
              private productService: ProductService) { }

  ngOnInit(): void {
    const productId: string|null = this.route.snapshot.paramMap.get('id');
    if(productId){
      this.productService.getProductById(productId)
      .subscribe(data => {
        if(data) {this.product = {id: productId, data: data}
          } else {this.product = undefined}
      });
    }
  }

  deleteProduct(product: Product){
    this.productService.deleteProductById(product.id)
      .subscribe(()=> this.goToProductList())
  }

  goToProductList(){
    this.router.navigate(['products']);
  }

  editProduct(product: Product){
    this.router.navigate(['/edit/product', product.id]);
  }

  addReview(review: string){
    if(!review){
      return;
    }
     let updatedData: Data;
      const productId: string|null = this.route.snapshot.paramMap.get('id');
      if(productId){
          if(this.product?.data){
        updatedData = this.product?.data;
        updatedData.reviews.push(review);
        this.productService.addProduct(updatedData)
      .subscribe((id)=>{
          if(id) { this.productService.deleteProductById(productId).subscribe(
           () => this.router.navigate(['/products', id]))}
        
      }); 
    }
  }
}

  deleteReview(review: string){
    if(!review){
      return;
    }
    let reviewUpdated: string[] = [];
    if(this.product){
      for(let review of this.product.data.reviews){
        reviewUpdated.push(review);
      }
      const index: number = reviewUpdated.indexOf(review);
        if(index !== -1){
          reviewUpdated.splice(index, 1);
        }
      let updatedData: Data = {
        title: this.product.data.title,
        category: this.product.data.category,
        price: this.product.data.price,
        employee: this.product.data.employee,
        description: this.product.data.description,
        reviews: reviewUpdated
      }
      const productId: string|null = this.route.snapshot.paramMap.get('id');
      if(productId){
      this.productService.addProduct(updatedData)
      .subscribe((id)=>{
          if(id) { this.productService.deleteProductById(productId).subscribe(
            () => this.router.navigate(['/products', id]))
          }
        });
      }
    }
  }
}
