import { User } from '../models/user.model';
import { EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export class UserService {
  users = [
    {
      name: 'Alpha',
      isActive: true
    },
    {
      name: 'Beta',
      isActive: true
    },
    {
      name: 'Gamma',
      isActive: false
    }, {
      name: 'Delta',
      isActive: false
    }
  ];
  updateUsers = new BehaviorSubject<User[]>(this.users);

  toggleUser(userToChange: User) {
    this.users = this.users.map((user) => {
      if (user.name === userToChange.name) {
        user.isActive = !user.isActive;
      }
      return user;
    });
    this.updateUsers.next(this.users);
  }
}
