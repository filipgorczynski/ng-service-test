import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-tasks-todo',
  templateUrl: './tasks-todo.component.html',
  styleUrls: ['./tasks-todo.component.css']
})
export class TasksTodoComponent implements OnInit {
  @Input() tasks: Task[] = [];

  constructor(
    private taskService: TaskService
  ) {}

  ngOnInit() {
    this.tasks = this.tasks.filter(task => !task.isDone);
  }

  onClick_closeTask(task: Task) {
    console.log('onClick_closeTask: ', task);
    this.taskService.toggleTask(task);
    this.taskService.tasksUpdate.emit(this.tasks);
  }
}
