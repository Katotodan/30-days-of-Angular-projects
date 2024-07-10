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
  constructor(private dataService: FetchDataService){}

  ngOnInit(): void {
    this.isLoading = true
    this.dataService.getRandomRecipe().subscribe(res=> {
      this.recipeData = res["meals"]   
      this.isLoading = false
      console.log(res );
         
    }) 
  }

  ngOnChanges(changes: SimpleChanges) {

    for (const inputName in changes) {
      const inputValues = changes[inputName];
      if(inputName === "category" && this.category){
        this.isLoading = true
        this.dataService.getRecipeByCategory(inputValues.currentValue).subscribe(res =>{
          this.recipeData = res["meals"]
          this.isLoading = false
          console.log(res["meals"]);
          
          
        })
      }else{
        // Search by name
        if(this.searchName){
          this.isLoading = true
          this.dataService.getRecipeByName(inputValues.currentValue).subscribe(res =>{
            this.recipeData = res["meals"]
            this.isLoading = false
            console.log(res["meals"]);
            
          })  
        }
        
      }    
    }

  }
}
