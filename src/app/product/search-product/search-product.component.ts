import { ProductService } from './../product.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Subject, Observable, debounceTime, distinctUntilChanged, switchMap, filter } from 'rxjs';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.scss']
})
export class SearchProductComponent implements OnInit {

  searchValue = new Subject<string>();
  products$: Observable<Product[]> | undefined;

  constructor(private router: Router, 
              private productService: ProductService) { }

  ngOnInit(): void {
    this.products$ = this.searchValue.pipe(
      debounceTime(300), 
      distinctUntilChanged(),
      switchMap(value => this.productService.searchProducts(value)
      )
    );
  }


  search(value: string){
    this.searchValue.next(value);
  }

  goToProduct(product: Product){
    this.router.navigate(['/products', product.id]);
  }

}
