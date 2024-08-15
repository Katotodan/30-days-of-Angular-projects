import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from '../form/form.component';
import { AuthService } from '../auth.service';

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
  constructor(private authService: AuthService){}

  login(e:object){
    console.log("Login");
    
    this.authService.login(e).subscribe({
      next: (response) => {
        
        // Handle the response as needed 
      },
      error: (error) => {
        console.log("error occure");
        
        this.message = error.message
        setTimeout(() => {
          this.message = ""
        }, 2000);
      }
    });
  }

}
// Start working on navigation, user are able to sign up and login, I should now navigate
