import { Injectable } from '@angular/core';
import{ User } from '../models/user.model';
import{ UserCredentials } from '../models/user-credentials.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly CURRENT_USER_KEY = 'recipeasy.currentUser';
private readonly USERS_KEY = 'recipeasy.users';

private _currentUser : User | null = null;

get currentUser(): User | null {
  return this._currentUser;
}

get isLoggedIn(): boolean {
  return !!this._currentUser;
}

private get usersCredentials(): UserCredentials[] {
  let usersCredentials : UserCredentials[] = [];
  const storedUsers = JSON.parse(localStorage.getItem(this.USERS_KEY) ?? 'null');

  if (storedUsers) {
    usersCredentials = (storedUsers as UserCredentials[]).map(obj =>
      new UserCredentials(obj)
    );
  }

  return usersCredentials;
}

constructor() {
  const storedCurrentUser = JSON.parse(localStorage.getItem(this.CURRENT_USER_KEY) ?? 'null');

  if (storedCurrentUser) {
    this._currentUser = new User(storedCurrentUser);
  }
}

private setCurrentUser(user: User | null) {
  this._currentUser = user;
  localStorage.setItem(this.CURRENT_USER_KEY, JSON.stringify(user));
}

get users(): User[] {
  return this.usersCredentials.map(userCredentials => new User(userCredentials));
}

private emailExists(email: string): boolean {
  return !!this.usersCredentials.find(credentials =>
    credentials.email == email
    );
}

logIn(credentials: UserCredentials): boolean {
  const validUser = this.usersCredentials.find(userCredentials =>
    userCredentials.email == credentials.email && userCredentials.password == credentials.password
  );

  if (validUser) {
    this.setCurrentUser(new User(validUser))
  }

  return !!validUser;
}

signUp(credentials: UserCredentials): boolean {
  if (this.emailExists(credentials.email)) {
    return false;
  } else {
    let usersCredentials = this.usersCredentials;

    usersCredentials.push(credentials);
    localStorage.setItem(this.USERS_KEY, JSON.stringify(usersCredentials));

    this.setCurrentUser(new User(credentials))

    return true;
  }
}

logOut() {
  this.setCurrentUser(null);
}
}
