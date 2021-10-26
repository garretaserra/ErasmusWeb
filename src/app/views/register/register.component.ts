import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: {
    email: string;
    password: string;
    name: string;
    surname: string;
  };
  public registerForm: FormGroup;

  validationMessages = {
    name: [
      {type: 'required', message: 'Name is required.'},
      {type: 'pattern', message: 'Name is not valid.'}
      ],
    surname: [
       {type: 'required', message: 'Surname is required.'},
       {type: 'pattern', message: 'Surname is not valid.'}
     ],
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
  constructor(public formBuilder: FormBuilder,
              public router: Router,
              private authentication: AuthenticationService) {
    this.registerForm = formBuilder.group({
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
  async register() {
    // await this.authentication.registerUser(this.user.name,this.user.surname,this.user.email,this.user.password).toPromise();
  }


}

