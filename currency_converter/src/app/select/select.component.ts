import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';


@Component({
  selector: 'app-select',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgFor,
  ],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css'
})


export class SelectComponent {
  options: string[] = []
  selectedValue:string = ""
  @Output() currency = new EventEmitter<string>();
  constructor(private data: DataService){}

  ngOnInit(): void {
    this.data.getList().then((res:any) => {
      this.options = Object.keys(res.result)
    })
  }

  selectChange(event:any){
    this.selectedValue = event.target.value
    this.currency.emit(this.selectedValue)
  }
}
  
