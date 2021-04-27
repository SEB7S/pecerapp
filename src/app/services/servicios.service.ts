import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor( private http: HttpClient) { }


//Usuarios

  login(body){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    
    })
    return this.http.post(`https://apirestmipez.herokuapp.com/signin`, body, {headers})
   }

   add_user(body, token){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    
    })
    return this.http.post(`https://apirestmipez.herokuapp.com/usuario`, body, {headers})
   }

   edit_user(id, body, token){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    
    })
    return this.http.put(`https://apirestmipez.herokuapp.com/usuario/` + id, body, {headers})
   }

   delete_user(id, token){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    })
    return this.http.delete(`https://apirestmipez.herokuapp.com/usuario/` + id, {headers})
    
   }
   
  get_usuarios(token){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    
    })
   return this.http.get(`https://apirestmipez.herokuapp.com/usuarios`, {headers})
  }
  get_usuario(id,token){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    
    })
   return this.http.get(`https://apirestmipez.herokuapp.com/usuario/`+ id, {headers})
  }

  //Peces

  get_peces(token){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    
    })
   return this.http.get(`https://apirestmipez.herokuapp.com/pez`, {headers})
  }

  get_pez(id,token){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    
    })
   return this.http.get(`https://apirestmipez.herokuapp.com/pez/`+ id, {headers})
  }

  
  add_pez(body, token){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    })
    return this.http.post(`https://apirestmipez.herokuapp.com/peces`, body, {headers})
   }

   edit_pez(id, body, token){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    
    })
    return this.http.put(`https://apirestmipez.herokuapp.com/peces/` + id, body, {headers})
   }

   delete_pez(id, token){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    })
    return this.http.delete(`https://apirestmipez.herokuapp.com/peces/` + id, {headers})
    
   }
}
