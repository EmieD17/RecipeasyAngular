import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {

  private id: number = 1;
  email='';

  loginForm: FormGroup;
  //loginForm!: FormGroup;
  //loginForm?: FormGroup;
  //loginForm?: FormGroup; //union type

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(3)])
    });
    //this.loginForm?.controls;
  }

  ngOnInit(): void {
  }

  //process(param: string){}

  logIn(){
    //alert(JSON.stringify(this.loginForm.value));
  }
}
