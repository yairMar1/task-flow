import { Component, input, inject } from '@angular/core';
import { CdkDropList, CdkDrag, CdkDragDrop } from '@angular/cdk/drag-drop';
import { TaskCard } from '../task-card/task-card';
import { Task } from '../task.model';
import { TaskService } from '../task-service';

@Component({
  selector: 'app-column',
  imports: [TaskCard, CdkDropList, CdkDrag],
  templateUrl: './column.html',
  styleUrl: './column.css',
})
export class Column {
  title = input('');
  status = input<Task['status']>('To Do');
  tasks = input<Task[]>([]);

  private taskService = inject(TaskService);

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) return;
    const task = event.item.data as Task;
    this.taskService.updateTask(task.id, { status: this.status() });
  }
}
