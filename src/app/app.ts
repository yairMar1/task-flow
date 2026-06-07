import { Component, signal, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Column } from './column/column';
import { Task } from './task.model';
import { TaskService } from './task-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Column],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('task-flow');
  constructor(protected taskService: TaskService) {}
}
