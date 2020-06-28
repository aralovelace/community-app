import { Component, OnInit } from '@angular/core';
import {FirebaseUserModel} from '../../Core/user.model';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../Core/user.service';
import {AuthService} from '../../Core/auth.service';
import {ActivatedRoute} from '@angular/router';
import { Location} from '@angular/common';

@Component({
  selector: 'page-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: FirebaseUserModel = new FirebaseUserModel();
  profileForm: FormGroup;

  constructor(
    public userService: UserService,
    public authService: AuthService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {

  }

}
