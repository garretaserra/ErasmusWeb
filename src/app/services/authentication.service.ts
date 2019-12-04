import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment} from "../../environments/environment";

let httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
    }
  )
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  url = environment.apiUri;
  token = sessionStorage.getItem('token');

  constructor(private http: HttpClient) {
  }

  registerUser(email, password){
    return this.http.post(this.url+'/user/register',{email: email, password: password});
  }

  loginUser(email, password){
    return this.http.post<any>(this.url+'/user/login',{email: email, password: password});
  }

  //Example of request with authorization
  getUser(){
    httpOptions.headers = httpOptions.headers.delete("Authorization");
    httpOptions.headers = httpOptions.headers.append("Authorization", 'Token ' + this.token);
    return this.http.get(this.url+'/user/user', httpOptions);
  }
}
