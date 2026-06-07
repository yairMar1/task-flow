import { Component } from '@angular/core';
import {FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';
import { TaskService } from '../task-service';

@Component({
  selector: 'app-add-task',
  imports: [ReactiveFormsModule],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css',
})
export class AddTask {
  taskForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(protected taskService: TaskService) {}

  onSubmit() {
    const { title, description } = this.taskForm.value;
    if (title && description) {
      this.taskService.addTask(title, description ?? '', 'To Do');
      this.taskForm.reset();
    }
  }
}
