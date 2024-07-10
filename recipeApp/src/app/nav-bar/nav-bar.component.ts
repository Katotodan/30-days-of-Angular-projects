import { Component,  EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'nav-bar',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  @Output() category = new EventEmitter<string>()
  @Output() recipeName = new EventEmitter<string>()

  recipe = ""
  onCategory(value:string){
    this.category.emit(value)
    this.recipe = ""
  }
  searchByName(){
    this.recipeName.emit(this.recipe)
  }

}
