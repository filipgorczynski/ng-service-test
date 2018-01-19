import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-tasks-done',
  templateUrl: './tasks-done.component.html',
  styleUrls: ['./tasks-done.component.css']
})
export class TasksDoneComponent implements OnInit {
  tasks: Task[] = [];

  constructor(
    private taskService: TaskService
  ) {}

  ngOnInit() {
    this.tasks = this.taskService.tasks;
  }

  onClick_openTask(task: Task) {
    this.taskService.toggleTask(task);
    this.taskService.tasksUpdate.emit(task);
  }

}
