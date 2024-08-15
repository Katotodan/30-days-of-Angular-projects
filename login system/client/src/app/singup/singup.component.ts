import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from '../form/form.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-singup',
  standalone: true,
  imports: [
    CommonModule,
    FormComponent
  ],
  templateUrl: './singup.component.html',
  styleUrl: './singup.component.css'
})
export class SingupComponent {
  constructor(private authService: AuthService){}
  message: string = ""
  signUp(e:object){
    this.authService.signUpUser(e).subscribe({
      next: (response) => {
        console.log('Response received:', response);
        // Handle the response as needed 
      },
      error: (error) => {
        this.message = error.message
        setTimeout(() => {
          this.message = ""
        }, 2000);
      }
    });
  }
}
