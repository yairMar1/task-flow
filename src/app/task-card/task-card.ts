import { Component } from '@angular/core';
import { input } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-card',
  imports: [],
  templateUrl: './task-card.html',
  styleUrl: './task-card.css',
})
export class TaskCard {
  task = input<Task>();
}
