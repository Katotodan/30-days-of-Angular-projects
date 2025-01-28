import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  
  constructor(private http: HttpClient) { }

  getRandomRecipe(): Observable<any>{
    return this.http.get<any>('http://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood').pipe(
      catchError((error) => {
        // Log or process the error here
        console.error('Error occurred:', error);
        return throwError(() => new Error('Something went wrong. Please try again later.'));
      })
    )
  }
  getRecipeByCategory(category:string): Observable<any>{
    return this.http.get<any>('http://www.themealdb.com/api/json/v1/1/filter.php?c='+ category).pipe(
      catchError((error) => {
        // Log or process the error here
        console.error('Error occurred:', error);
        return throwError(() => new Error('Something went wrong. Please try again later.'));
      })
    )
  }
  getRecipeByName(name:string): Observable<any>{
    return this.http.get<any>('http://www.themealdb.com/api/json/v1/1/search.php?s='+ name).pipe(
      catchError((error) => {
        // Log or process the error here
        console.error('Error occurred:', error);
        return throwError(() => new Error('Something went wrong. Please try again later.'));
      })
    )
  }
  getRecipeById(id:number): Observable<any>{
    return this.http.get<any>('http://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id).pipe(
      catchError((error) => {
        // Log or process the error here
        console.error('Error occurred:', error);
        return throwError(() => new Error('Something went wrong. Please try again later.'));
      })
    )
  }
}