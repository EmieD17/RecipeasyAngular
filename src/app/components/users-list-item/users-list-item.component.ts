import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: '[app-users-list-item]',
  templateUrl: './users-list-item.component.html',
  styleUrls: ['./users-list-item.component.scss']
})
export class UsersListItemComponent implements OnInit {

  @Input() user! : User;
  @Output() readonly clicked: EventEmitter<User> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  click(){
    //alert(this.user.email);
    this.clicked.emit(this.user);
  }




}
