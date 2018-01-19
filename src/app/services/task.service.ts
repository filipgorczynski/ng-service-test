import { Task } from '../models/task.model';
import { EventEmitter } from '@angular/core';

export class TaskService {
  tasks = [
    {
      body: 'Wake up',
      isDone: true
    },
    {
      body: 'Take a shower',
      isDone: true
    },
    {
      body: 'Work',
      isDone: false
    }, {
      body: 'Eat',
      isDone: false
    }, {
      body: 'Sleep',
      isDone: false
    }
  ];
  tasksUpdate = new EventEmitter<Task>();

  toggleTask(taskToChange: Task) {
    this.tasks.map((task, index) => {
      if (task.body === taskToChange.body) {
        this.tasks[index].isDone = !this.tasks[index].isDone;
      }
      return task;
    });
  }
}
