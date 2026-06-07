import { Component, signal, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Column } from './column/column';
import { TaskService } from './task-service';
import { AddTask } from './add-task/add-task';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Column, AddTask],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('task-flow');
  constructor(protected taskService: TaskService) {}
}
