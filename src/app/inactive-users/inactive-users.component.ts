import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { User } from '../models/user.model';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  users: User[] = [];

  constructor(
    private userService: UserService
  ) {
    this.userService.updateUsers.subscribe(users => {
      this.users = users.filter(user => !user.isActive);
    });
  }

  onClick_activateUser(user: User) {
    this.userService.toggleUser(user);
  }
}
