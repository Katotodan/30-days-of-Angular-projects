import { Component, EventEmitter, Output  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  townName:string = ""
  @Output() town = new EventEmitter<string>();


  onSubmit(): void{
    this.town.emit(this.townName)
    this.townName = ""
  }

}
