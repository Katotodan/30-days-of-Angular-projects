import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { AllRecipeComponent } from '../all-recipe/all-recipe.component';


@Component({
  selector: 'app-recipe-container',
  standalone: true,
  imports: [
    CommonModule,
    NavBarComponent,
    AllRecipeComponent,
  ],
  templateUrl: './recipe-container.component.html',
  styleUrl: './recipe-container.component.css'
})
export class RecipeContainerComponent {
  title = 'recipeApp'
  category!:string; 
  searchName!:string; 
  categorySelected(event:string){
    this.category = event 
    // this.searchName = ""
  }
  nameSelected(name:string){
    this.searchName = name
    // this.category = ""
  }

}

