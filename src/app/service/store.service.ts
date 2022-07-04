import { StatsCategories } from './../models/statsCategories';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Store } from '../models/store';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http: HttpClient) { }

  getStoreById(idStore: string): Observable<Store>{
    return this.http.get<any>(`https://us-central1-test-b7665.cloudfunctions.net/api/stores/${idStore}`).pipe(
      tap((data) => this.log(data)),
      catchError((error) => this.handleError(error, undefined, "getStoreById"))
    );
  }

  getStatsCategories(idStore: string): Observable<StatsCategories[]>{
    return this.http.get<StatsCategories[]>(`https://us-central1-test-b7665.cloudfunctions.net/api/stores/${idStore}/stats/categories`).pipe(
      tap((data) => this.log(data)),
      catchError((error) => this.handleError(error, undefined, "getStats"))
    );
  }


  private log( response: any){
    console.table(response);
  }

  private handleError( error: Error, errorValue: any, name: string ){
    console.error(error.message + " : Erreur lors de la recuperation des données, le service " + name + " ne repond pas");
    return of(errorValue);
  }

}
