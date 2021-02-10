import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  private baseUrl = 'http://localhost:8080/RetailShopping/api/suppliers';
  constructor(private http: HttpClient) { }
}
