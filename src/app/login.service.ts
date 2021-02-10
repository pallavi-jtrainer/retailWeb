import { Login } from './login/login';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = 'http://localhost:8080/RetailShopping/api/users';

  constructor(private http: HttpClient) { }

  getUserById(name: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${name}`);
  }
}
