import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  @Input() usersInput: User[] = [];

  constructor() { }

  ngOnInit(): void {
  }
  userClicked(user: User){
    alert(JSON.stringify(user));
  }

}
