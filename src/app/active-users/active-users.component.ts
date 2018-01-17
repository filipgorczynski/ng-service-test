import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { User } from '../models/user.model';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  users: User[] = [];

  constructor(
    private userService: UserService
  ) {
    this.userService.updateUsers.subscribe(users => {
      this.users = users.filter(user => user.isActive);
    });
  }

  onClick_inactivateUser(user: User) {
    this.userService.toggleUser(user);
  }
}
