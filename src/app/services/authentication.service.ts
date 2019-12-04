import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  url = environment.apiUri;

  constructor(private http: HttpClient) {
  }

  registerUser(email, password){
    return this.http.post(this.url+'/user/register',{email: email, password: password});
  }

  loginUser(email, password){
    return this.http.post<any>(this.url+'/api/user/login',{email: email, password: password});
  }
}
