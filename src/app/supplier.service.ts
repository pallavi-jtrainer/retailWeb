import { Supplier } from './supplier-dash/Supplier';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  private baseUrl = 'http://localhost:8080/RetailShopping/api/suppliers';
  constructor(private http: HttpClient) { }

  getSupplierById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  registerSupplier(sup: Supplier, user: string, pass: string): Observable<any> {
    const header = {'content-type': 'application/json'};
    const body = JSON.stringify(sup);

    return this.http.post(`${this.baseUrl}/register/${sup.supplierName}/${sup.address}/`
      + `${sup.contact}/${sup.email}/${user}/${pass}`, body, {headers: header, responseType: 'text'});
  }
}
