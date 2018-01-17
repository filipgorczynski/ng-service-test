import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-tasks-done',
  templateUrl: './tasks-done.component.html',
  styleUrls: ['./tasks-done.component.css']
})
export class TasksDoneComponent implements OnInit {
  @Input() tasks: Task[] = [];

  constructor(
    private taskService: TaskService
  ) {}

  ngOnInit() {
    this.tasks = this.tasks.filter(task => task.isDone);
  }

  onClick_openTask(task: Task) {
    console.log('onClick_openTask: ', task);
    this.taskService.toggleTask(task);
  }

}
