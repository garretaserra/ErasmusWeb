import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {User} from "../../models/user";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
              private authentication: AuthenticationService) {
  }

  form: FormGroup = new FormGroup({});
  user: User;
  suggestions: String[];
  searchValue: string;

  async ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('user'));
    console.log(this.authentication.getUser().toPromise());
  }

  logOff(){
    sessionStorage.clear();
    this.router.navigateByUrl('/login');
  }

  async updateSuggestions(event){
    this.searchValue = event.target.value;
    let users: User[] = await this.authentication.search(this.searchValue).toPromise();
    //Get emails of all users
    this.suggestions = users.map(a => a.email);
  }
}
