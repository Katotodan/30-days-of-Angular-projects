import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgFor, NgIf} from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule,FormsModule } from '@angular/forms';
import { TaskListInterface } from '../task-list-interface';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [
    CommonModule,
    NgFor,
    NgIf,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent {
  taskArray: TaskListInterface[]= []

  formData = new FormGroup({
    taskName: new FormControl(''),
  });

  addToList(){
    this.taskArray.push({
      taskName: this.formData.controls.taskName.value ?? "",
      taskStatus: false
    })
    this.formData.reset()
  }
  onChecked(index:number){
    this.taskArray[index]["taskStatus"] = !this.taskArray[index]["taskStatus"]
  }
  deleteTask(index:number){
    this.taskArray.splice(index, 1)
  }
  // rename(index:number){
  //   // To be continued
  // }
}
