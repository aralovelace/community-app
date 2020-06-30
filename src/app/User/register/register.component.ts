import {Component, OnInit} from '@angular/core';
import { AuthService} from '../../Core/auth.service';
import { Router, Params} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MustMatch} from '../../Helpers/must-match.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  registerForm: FormGroup;
  errorMessage = '';
  successMessage = '';
  submitted = false;

  constructor(
    public authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {

  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email ]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  onSubmit(): void {

    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.tryRegister(this.registerForm.value);
  }

  get er() { return this.registerForm.controls; }



  tryRegister(value){

    this.authService.doRegister(value)
      .then(res => {

        this.errorMessage = '';
        this.successMessage = 'Your account has been created';
        this.router.navigate(['/user']);
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
        this.successMessage = '';
        });

  }

}
