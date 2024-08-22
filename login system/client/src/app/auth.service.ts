import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  headers = {
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    }
  }

  constructor(private http:HttpClient) { }

  isUserLoggedIn():Observable<any>{
    return this.http.get("http://localhost:5000/", this.headers)
  }

  signUpUser(data:object):Observable<any>{
    return this.http.post<any>("http://localhost:5000/signup", data, this.headers).pipe(
      catchError((error: HttpErrorResponse)=>{
        return throwError(() => new Error(error.error.message));
      })
    )
    
  } 

  login(data:object):Observable<any>{
    return this.http.post<any>("http://localhost:5000/login/password", data, this.headers).pipe(
      catchError((error: HttpErrorResponse)=>{ 
        console.log(error);
        
        return throwError(() => new Error("Something went wrong"));
      })
    )
     
  } 
  logout(data:object): Observable<any>{
    return this.http.post<any>("http://localhost:5000/logout", data, this.headers).pipe(
      catchError((error: HttpErrorResponse)=>{
        console.log("Fail to logout");
        
        console.log(error);
        
        return throwError(() => new Error("Something went wrong"));
    }))
  }
}
