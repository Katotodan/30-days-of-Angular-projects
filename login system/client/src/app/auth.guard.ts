import { CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService)
  const router = inject(Router)
  authService.isUserLoggedIn().subscribe({
    next: (response) => {
      console.log('Response received:', response);
      // Handle the response as needed 
      return true
    },
    error: (error) => {
      router.navigate(["/login"])
      return false
    }
  })
  
  return true;
};

export const logGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService)
  const router = inject(Router)
  authService.isUserLoggedIn().subscribe({
    next: (response) => {
      console.log('Response received:', response);
      // Handle the response as needed 
      router.navigate(["/"])
      return false
      
    },
    error: (error) => {
      return true
    }
  })
  
  return true;
};



