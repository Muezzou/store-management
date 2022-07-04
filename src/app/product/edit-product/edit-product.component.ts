import { ProductService } from './../product.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Data, Product } from '../product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  product: Product | undefined;
  data!: Data;

  constructor(private route :ActivatedRoute, 
              private productService :ProductService) { }

  ngOnInit(): void {
    const productId: string|null = this.route.snapshot.paramMap.get('id');
    if(productId){
      this.productService.getProductById(productId)
      .subscribe(data => {
        if(data) {this.product = {id: productId, data: data}
                  this.data = data;
          } else {this.product = undefined}
      });
    }
  }

}
