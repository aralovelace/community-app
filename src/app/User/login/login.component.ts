import { Component } from '@angular/core';
import { AuthService} from '../../Core/auth.service';
import {Router, Params} from '@angular/router';
import {Form, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: '';


  constructor(
    public authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.createForm();
  }


  createForm() {
    this.loginForm = this.fb.group ({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

  }


  tryLogin(value){
    this.authService.doLogin(value)
      .then(res => {
        this.router.navigate(['/user']);
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
        });
  }

}
