import { Component, OnInit } from '@angular/core';
import { User } from './models/user.model';
import { UserService } from './services/user.service';
import { TaskService } from './services/task.service';

import { Task } from './models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tasks: Task[] = [];

  constructor(
    private userService: UserService,
    private taskService: TaskService
  ) {}

  ngOnInit() {
    this.tasks = this.taskService.tasks;
  }
}
