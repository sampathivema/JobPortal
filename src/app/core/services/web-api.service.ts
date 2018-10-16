import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebAPIService {

  constructor(private httpc: HttpClient) { }
  getUser(user: any) {
    return this.httpc.post('http://localhost:57030/api/User/GetUserByUserName', user);
  }
  postUser(user: any) {
    console.log(user);
    return this.httpc.post('http://localhost:57030/api/User', user);
  }
  getUsers() {
    return this.httpc.get('http://localhost:57030/api/User');
  }

}
