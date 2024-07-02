import { Component, OnInit,Input, SimpleChanges } from '@angular/core';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FetchDataService } from '../fetch-data.service';


@Component({
  selector: 'all-recipe',
  standalone: true,
  imports: [
    CommonModule,
    NgFor,
  ],
  templateUrl: './all-recipe.component.html',
  styleUrl: './all-recipe.component.css'
})
export class AllRecipeComponent {
  @Input() category!: string
  @Input() searchName!: string
  recipeData: any[]= []
  constructor(private dataService: FetchDataService){}

  ngOnInit(): void {
    this.dataService.getRandomRecipe().subscribe(res=> {
      this.recipeData = res["categories"]   
      console.log(res);
         
    })
  }

  ngOnChanges(changes: SimpleChanges) {

    for (const inputName in changes) {
      const inputValues = changes[inputName];
      if(inputName === "category" && this.category){
        this.dataService.getRecipeByCategory(inputValues.currentValue).subscribe(res =>{
          this.recipeData = res["meals"]
          console.log(res);
          
        })
      }else{
        // Search by name
        if(this.searchName){
          this.dataService.getRecipeByName(inputValues.currentValue).subscribe(res =>{
            this.recipeData = res["meals"]
            console.log(res);
            
          })  
        }
        
      }    
    }

  }
}
