import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  
  constructor(private http: HttpClient) { }

  getRandomRecipe(): Observable<any>{
    return this.http.get<any>('http://www.themealdb.com/api/json/v1/1/categories.php')
  }
  getRecipeByCategory(category:string): Observable<any>{
    return this.http.get<any>('http://www.themealdb.com/api/json/v1/1/filter.php?c='+ category)
  }
  getRecipeByName(name:string): Observable<any>{
    return this.http.get<any>('http://www.themealdb.com/api/json/v1/1/search.php?s='+ name)
  }
}