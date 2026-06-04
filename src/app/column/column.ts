import { Component, input } from '@angular/core';
import { TaskCard } from '../task-card/task-card';
import { Task } from '../task.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-column',
  imports: [TaskCard, NgFor],
  templateUrl: './column.html',
  styleUrl: './column.css',
})
export class Column {
  title = input('');
  tasks = input<Task[]>([]);
}
