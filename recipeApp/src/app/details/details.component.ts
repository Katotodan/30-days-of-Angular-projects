import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FetchDataService } from '../fetch-data.service';
import {RouterModule} from '@angular/router';




@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule,
    NgFor,
    RouterModule
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute)
  recipeId!:number 
  recipeInfo: any | undefined;
  ingredients: string[] = []
  isLoading: boolean = true
  errorMessage:string = ""

  constructor(private fetchData: FetchDataService){
    this.recipeId = Number(this.route.snapshot.params['id'])
  }

  ngOnInit(): void {
    this.fetchData.getRecipeById(this.recipeId).subscribe(
    {
      next: (res) => {
        this.recipeInfo = res["meals"][0] 
        for(const key in this.recipeInfo){
          if(key.includes("strIngredient") && this.recipeInfo[key]){
            this.ingredients.push(this.recipeInfo[key])
          }
        } 
        this.isLoading = false            
      },
      error: (err) => {
        this.isLoading = false 
        this.errorMessage = err.message
      },
    })   
  }



} 
