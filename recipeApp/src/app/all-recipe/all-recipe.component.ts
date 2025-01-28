import { Component, OnInit,Input, SimpleChanges } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FetchDataService } from '../fetch-data.service';
import {RouterModule} from '@angular/router';


@Component({
  selector: 'all-recipe',
  standalone: true,
  imports: [
    CommonModule,
    NgFor,
    NgIf,
    RouterModule,
  ],
  templateUrl: './all-recipe.component.html',
  styleUrl: './all-recipe.component.css'
})
export class AllRecipeComponent {
  @Input() category!: string
  @Input() searchName!: string
  recipeData: any[]= []
  isLoading = false
  errorMessage = ""

  constructor(private dataService: FetchDataService){}

  ngOnInit(): void {
    this.isLoading = true
    this.errorMessage = ""
    this.dataService.getRandomRecipe().subscribe( 
    {
      next: (res) => {
        this.recipeData = res["meals"]   
        this.isLoading = false           
      },
      error: (err) => (this.errorMessage = err.message),
    }) 
  }

  ngOnChanges(changes: SimpleChanges) {

    for (const inputName in changes) {
      const inputValues = changes[inputName];
      
      if(inputName === "category" && this.category){
        this.isLoading = true
        this.errorMessage = ""
        this.dataService.getRecipeByCategory(inputValues.currentValue).subscribe(
        {
          next: (res) => {
            this.recipeData = res["meals"]
            this.isLoading = false               
          },
          error: (err) => (this.errorMessage = err.message),
        })
      }else{
        // Search by name
        if(this.searchName){
          this.isLoading = true
          this.errorMessage = ""
          this.dataService.getRecipeByName(inputValues.currentValue).subscribe(
          {
            next: (res) => {
              this.recipeData = res["meals"]
              this.isLoading = false                 
            },
            error: (err) => {
              this.isLoading = false
              this.errorMessage = err.message
              
            },
          })  
        }
        
      }    
    }

  }
}
