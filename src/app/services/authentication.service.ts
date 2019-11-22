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

  registerUser(username, password){
    return this.http.post(this.url+'/subject/addNew',{subject:{name: username},student:{name: password}});
  }

  loginUser(username, password){
    return this.http.post(this.url+'/subject/addNew',{subject:{name: username},student:{name: password}});
  }
}
