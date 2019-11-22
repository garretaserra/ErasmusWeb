import {Component, NgModule, OnInit} from '@angular/core';
import {Form, FormGroup} from "@angular/forms";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  form: Form;

  ngOnInit() {
    console.log(environment.apiUri);
  }
}
