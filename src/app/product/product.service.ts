import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Data, Product } from './product';

@Injectable()
export class ProductService {

  constructor( private httpClient: HttpClient) { }

  getProductList(): Observable<Product[]>{
    return this.httpClient.get<Product[]>('http://us-central1-test-b7665.cloudfunctions.net/api/stores/ijpxNJLM732vm8AeajMR/products').pipe(
      tap((response) => this.log(response)),
      catchError(error => this.handleError(error, []))
      );
  }


  getProductById(productId: string): Observable<Data|undefined>{
    return this.httpClient.get<Data>(`http://us-central1-test-b7665.cloudfunctions.net/api/stores/ijpxNJLM732vm8AeajMR/products/${productId}`).pipe(
    tap((data) => this.log(data)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  addProduct(data: Data): Observable<string>{
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      responseType: 'text' as 'text'
    };
    return this.httpClient.post('http://us-central1-test-b7665.cloudfunctions.net/api/stores/ijpxNJLM732vm8AeajMR/products', data, options).pipe(
      tap((id) => this.log(id)),
      catchError((error) => this.handleError(error, null))
    );
  }

  deleteProductById(productId: string): Observable<null>{
      return this.httpClient.delete(`http://us-central1-test-b7665.cloudfunctions.net/api/stores/ijpxNJLM732vm8AeajMR/products/${productId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  private log( response: any){
    console.table(response);
  }

  private handleError( error: Error, errorValue: any){
    console.error(error);
    return of(errorValue);
  }

}
