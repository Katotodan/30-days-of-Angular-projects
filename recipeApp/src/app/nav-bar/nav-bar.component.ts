import { Component,  
  EventEmitter, 
  Output, 
  ElementRef, 
  QueryList, 
  Renderer2, 
  ViewChildren 
} from '@angular/core';
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

  @ViewChildren('category') spanElements!: QueryList<ElementRef>
  @Output() category = new EventEmitter<string>()
  @Output() recipeName = new EventEmitter<string>()

  constructor(private renderer: Renderer2){}
  recipe = ""

  removeHighlight(){
    // Remove the "active" class from all spans
    this.spanElements.forEach(span => {
      this.renderer.removeClass(span.nativeElement, 'active');
    });
     
  }
  
  handleSelect(event: Event){
    const selectedCategory = (event.target as HTMLSelectElement).value
    if(selectedCategory){
      this.category.emit(selectedCategory)   
      this.removeHighlight()
    }
  }
 
  onCategory(event: Event, value:string){
    this.category.emit(value)
    this.recipe = ""
    this.removeHighlight()
    this.renderer.addClass(event.target as HTMLSelectElement, 'active');
  }
  searchByName(){
    this.recipeName.emit(this.recipe)
    this.removeHighlight()
  }
 
}
