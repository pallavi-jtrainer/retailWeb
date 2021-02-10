import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private baseUrl = 'http://localhost:8080/RetailShopping/api/items';

  constructor(private http: HttpClient) { }

  getAllItems(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getItemById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
