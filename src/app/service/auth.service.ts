import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserLogin } from '../model/UserLogin';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  entrar(UserLogin: UserLogin): Observable<UserLogin> {
    return this.http.post<UserLogin>(
      'https://ciusiblog.herokuapp.com/usuarios/logar',
      UserLogin
    );
  }
  cadastrar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(
      'https://ciusiblog.herokuapp.com/usuarios/cadastrar',
      usuario
    );
  }

  getByIdUser(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(`https://ciusiblog.herokuapp.com/usuarios/${id}`)
  }

  putUsuario(Usuario: Usuario): Observable<Usuario>{
    return this.http.put<Usuario>('https://ciusiblog.herokuapp.com/usuarios/alterar', Usuario)
  }

  logado() {
    let ok = false;

    if (environment.token != '') {
      ok = true;
    }
    return ok;
  }
}
