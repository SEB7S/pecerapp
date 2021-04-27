import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': 'Bearer ' + localStorage.getItem('token')
})
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor( private http: HttpClient) { }

  get_usuarios(body){
   return this.http.get(`https://apirestmipez.herokuapp.com/usuarios`, {headers})
  }
}


