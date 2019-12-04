import {Component, NgModule, OnInit} from '@angular/core';
import {Form, FormGroup} from "@angular/forms";
import {User} from "../../models/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {
  }

  form: FormGroup = new FormGroup({});
  user: User;

  async ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('user'));
  }

  logOff(){
    sessionStorage.clear();
    this.router.navigateByUrl('/login');
  }
}
