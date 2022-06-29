import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Store } from './store';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http: HttpClient) { }

  getStoreById(idStore: string): Observable<Store>{
    return this.http.get<any>(`https://us-central1-test-b7665.cloudfunctions.net/api/stores/${idStore}`).pipe(
      tap((data) => this.log(data)),
      catchError((error) => this.handleError(error, undefined))
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
