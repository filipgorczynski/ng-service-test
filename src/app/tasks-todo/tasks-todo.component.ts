import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-tasks-todo',
  templateUrl: './tasks-todo.component.html',
  styleUrls: ['./tasks-todo.component.css']
})
export class TasksTodoComponent implements OnInit {
  tasks: Task[] = [];

  constructor(
    private taskService: TaskService
  ) {}

  ngOnInit() {
    this.tasks = this.taskService.tasks;
  }

  onClick_closeTask(task: Task) {
    this.taskService.toggleTask(task);
    this.taskService.tasksUpdate.emit(task);
  }
}
