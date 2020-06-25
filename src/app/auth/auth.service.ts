import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http:HttpClient) { }
  createUser(userData){
   return this.http.post('https://lit-castle-40763.herokuapp.com/api/users',userData)
  }

  login(data){
    return this.http.post('https://lit-castle-40763.herokuapp.com/api/auth',data)

  }
}
