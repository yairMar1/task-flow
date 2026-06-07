import { Component, signal } from '@angular/core';
import { input } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task-service';

@Component({
  selector: 'app-task-card',
  imports: [],
  templateUrl: './task-card.html',
  styleUrl: './task-card.css',
})
export class TaskCard {
  constructor(protected taskService: TaskService) {}
  task = input<Task>();
  isEditing = signal(false);
  editTitle = signal('');
  editDescription = signal('');

  onEdit() {
    const current = this.task();
    if (current) {
      this.editTitle.set(current.title);
      this.editDescription.set(current.description);
      this.isEditing.set(true);
    }
  }

  onSave() {
    const current = this.task();
    if (current) {
      this.taskService.updateTask(current.id, {
        title: this.editTitle(),
        description: this.editDescription(),
      });
      this.isEditing.set(false);
    }
  }

  onDelete() {
    const currentTask = this.task();
    if (currentTask) {
      this.taskService.removeTask(currentTask.id);
    }
  }
}
