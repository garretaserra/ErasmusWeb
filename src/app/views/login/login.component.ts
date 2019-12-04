import {Component, Injectable, NgModule, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  user: {
    email: string;
    password: string;
  } = {
    email: '',
    password: ''

  };
  public loginForm: FormGroup;

  // tslint:disable-next-line:variable-name
  validation_messages = {
    email: [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Email is not valid.' }
    ],
    password: [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' },
      { type: 'maxlength', message: 'Password cannot be more than 25 characters long.' },
    ],
  };
  private http: any;

  constructor(public formBuilder: FormBuilder,
              private router: Router,
              private authentication: AuthenticationService) {
    this.loginForm = formBuilder.group({
      email: ['',  Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])],
      password: ['', Validators.compose([
        Validators.maxLength(25),
        Validators.minLength(5),
        Validators.required
      ])]
    });
  }

  ngOnInit() {
  }

  async login() {
    let response = await this.authentication.loginUser(this.user.email, this.user.password).toPromise();
    if(response){
      //Clear session storage and store token and User object
      sessionStorage.clear();
      sessionStorage.setItem('token', response.jwt);
      sessionStorage.setItem('user', JSON.stringify(response.user));
      this.router.navigateByUrl('/home');
    }
  }
}
