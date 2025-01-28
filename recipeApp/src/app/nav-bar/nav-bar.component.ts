import { Component,  EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import {MatIconModule} from '@angular/material/icon'

@Component({
  selector: 'nav-bar',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  @Output() category = new EventEmitter<string>()
  @Output() recipeName = new EventEmitter<string>()

  recipe = ""
  handleSelect(event: Event){
    const selectedCategory = (event.target as HTMLSelectElement).value
    if(selectedCategory){
      this.category.emit(selectedCategory)      
    }
  }
 
  onCategory(value:string){
    this.category.emit(value)
    this.recipe = ""
  }
  searchByName(){
    this.recipeName.emit(this.recipe)
  }
 
}

// Working on nav bar responsiveness, the select tag
