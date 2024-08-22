import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NgIf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  user: any = null
  constructor(private authService: AuthService, private router: Router){}

  ngOnInit(){
    this.authService.isUserLoggedIn().subscribe(response => {
      this.user = response
    })
  }    
  


  logOut(){
    this.authService.logout(this.user).subscribe({
      next: (response) => {
        this.router.navigate(["/login"])
      },
      error: (error) => {
        console.error('Error occurred:', error.message);
        // Handle the error as needed
      }
    })

  }

}
