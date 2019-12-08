import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ErasmusWeb';
  token: boolean = false;

  ngOnInit() {
    let token = sessionStorage.getItem('token');
    this.token = !!token;
  }
}
