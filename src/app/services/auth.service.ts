import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
import  jwt_decode  from "jwt-decode";

const AUTH_API = 'http://localhost:3000/api/auth';

const httpOptions = {
  headers : new HttpHeaders({'Content-Type' : 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private tokenStorageService : TokenStorageService) { }

  login(credentials) : Observable<any> {
    return this.http.post(AUTH_API + '/signin', {
      username : credentials.username,
      password : credentials.password
    }, httpOptions);
  }

  signup(user) : Observable<any> {
    return this.http.post(AUTH_API + '/signup', {
      username : user.username,
      email : user.email,
      password : user.password,
      roles : [user.roles.name]
    }, httpOptions);
  }

  isLoggedIn(){
    let token = this.tokenStorageService.getToken();
    if(token == null || token == undefined){
      return false;
    }

    let decoded = jwt_decode(token);
    if(decoded.exp < Date.now() / 1000){
      return false;
    }
    else{
      return true;
    }
  }
}
