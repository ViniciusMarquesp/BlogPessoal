import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {UserLogin} from '../model/UserLogin'
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  entrar (UserLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('https://ciusiblog.herokuapp.com/usuarios/logar',
    UserLogin)
  }
  cadastrar (usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('https://ciusiblog.herokuapp.com/usuarios/cadastrar',
    usuario)
  }

}