import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from '../form/form.component';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  message:string = ""
  constructor(private authService: AuthService, private router: Router){}

  login(e:object){
    console.log("Login");
    
    this.authService.login(e).subscribe({
      next: (response) => {
        // Navigate to home page
        this.router.navigate(["/"]) 
      },
      error: (error) => {
        console.log("error occure");
        console.log(error.message);
        
        
        this.message = error.message
        setTimeout(() => {
          this.message = ""
        }, 2000);
      }
    });
  }

}
// Start working on navigation, user are able to sign up and login, I should now navigate
