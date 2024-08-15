import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  isUserLoggedIn(){
    
  }
  signUpUser(data:object):Observable<any>{
    return this.http.post<any>("http://localhost:5000/signup", data, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      }
    }).pipe(
      catchError((error: HttpErrorResponse)=>{
        return throwError(() => new Error(error.error.message));
      })
    )
    
  } 

  login(data:object):Observable<any>{
    return this.http.post<any>("http://localhost:5000/login/password", data, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      }
    }).pipe(
      catchError((error: HttpErrorResponse)=>{
        console.log(error);
        
        return throwError(() => new Error("Something went wrong"));
      })
    )
    
  } 
}
