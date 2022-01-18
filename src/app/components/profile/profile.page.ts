import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss']
})
export class ProfilePage implements OnInit {

  currentUser: User;
  users: User[] = [];

  constructor(private auth: AuthService) {
    this.currentUser = this.auth.currentUser!;
    this.users = this.auth.users
  }

  ngOnInit(): void {
  }

}
