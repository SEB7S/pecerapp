import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const headers = new HttpHeaders({
  'Content-Type': 'application/json'
})
@Injectable({
  providedIn: 'root'
})


export class LoginService {

  constructor( private http: HttpClient) { }

  login(body){
   return this.http.post(`https://apirestmipez.herokuapp.com/signin`, body, {headers})
  }
}
