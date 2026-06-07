import { Injectable, signal, computed } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks = signal<Task[]>([
    { id: 1, title: 'Task 1', description: 'Description for Task 1', status: 'To Do' },
    { id: 2, title: 'Task 2', description: 'Description for Task 2', status: 'In Progress' },
    { id: 3, title: 'Task 3', description: 'Description for Task 3', status: 'Done' },
  ]);

  addTask(title: string, description: string, status: 'To Do' | 'In Progress' | 'Done') {
  const newTask: Task = {id: this.tasks().length + 1, title, description, status};
  this.tasks.update(tasks => [...tasks, newTask]);
  }

  removeTask(id: number) {
    this.tasks.update(tasks => tasks.filter(task => task.id !== id));
  }

  updateTask(id: number, updatedFields: Partial<Task>) {
    this.tasks.update(tasks => 
      tasks.map(task => 
        task.id === id ? { ...task, ...updatedFields } : task
      )
    );
  }

  todoTasks = computed(() => this.tasks().filter(task => task.status === 'To Do'));
  inProgressTasks = computed(() => this.tasks().filter(task => task.status === 'In Progress'));
  doneTasks = computed(() => this.tasks().filter(task => task.status === 'Done'));
}
