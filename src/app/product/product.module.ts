import { EditProductComponent } from './edit-product/edit-product.component';
import { LoaderComponent } from './../loader/loader.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { BorderCardDirective } from './directives/border-card.directive';
import { RouterModule, Routes } from '@angular/router';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductService } from './product.service';
import { FormsModule } from '@angular/forms';
import { ProductFormComponent } from './product-form/product-form.component';
import { AddProductComponent } from './add-product/add-product.component';


const productRoutes: Routes = [
  { path: 'edit/product/:id', component: EditProductComponent },
  { path: 'product/add', component: AddProductComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductItemComponent}
];

@NgModule({
  declarations: [
    ProductListComponent,
    ProductItemComponent,
    BorderCardDirective,
    ProductFormComponent,
    AddProductComponent,
    SearchProductComponent,
    LoaderComponent,
    EditProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(productRoutes)
  ],
  providers: [ProductService]
})
export class ProductModule { }
