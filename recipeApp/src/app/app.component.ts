import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AllRecipeComponent } from './all-recipe/all-recipe.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    NavBarComponent,
    AllRecipeComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'recipeApp'
  category!:string; 
  searchName!:string; 
  categorySelected(event:string){
    this.category = event 
    this.searchName = ""
  }
  nameSelected(name:string){
    this.searchName = name
    this.category = ""
  }
}
