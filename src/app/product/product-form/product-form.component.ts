import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Data } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  @Input() data!: Data;

  constructor(private router: Router, 
              private route: ActivatedRoute,
              private productService: ProductService) { }

  ngOnInit(): void {

  }

  onSubmit(){
    const productId: string|null = this.route.snapshot.paramMap.get('id');
    if(productId){
      this.productService.addProduct(this.data)
    .subscribe((id)=>{
        if(id) { this.productService.deleteProductById(productId).subscribe(
          () => this.router.navigate(['/products', id])
        )
          }
      });
    } else {
    this.productService.addProduct(this.data)
    .subscribe((id)=>{
        if(id) {this.router.navigate(['/products', id]);}
      })
    }
  }
}
