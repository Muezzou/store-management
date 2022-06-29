import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  product!: Product|undefined;

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

}
