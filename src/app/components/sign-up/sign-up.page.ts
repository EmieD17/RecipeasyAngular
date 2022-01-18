import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserCredentials } from 'src/app/models/user-credentials.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss']
})
export class SignUpPage implements OnInit {
  signupForm: FormGroup;
  signUpError: boolean = false;

  constructor(private auth: AuthService, private router: Router) {
    this.signupForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
      passwordConfirmation: new FormControl()
    }, [this.passwordMatch]);
  }

  private passwordMatch(form: AbstractControl): ValidationErrors | null {
    // AbstractControl est la super classe des FormGroup ET FormControl
    // attention sur lequel la validation personnalisée est appliquée

    if (form.value?.password != form.value?.passwordConfirmation) {
      return { passwordConfirmationMustMatch: true };
    } else {
      return null
    }
  }

  ngOnInit(): void {
  }

  signUp(){
    if(this.signupForm.valid){
      if(this.auth.signUp(new UserCredentials(this.signupForm.value))){
        //alert('ok');
        this.router.navigate(['/recipes']);
      }else{
          this.signUpError = true;
      }
    }
    //alert(JSON.stringify(this.signupForm.value));
  }

}
