import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private baseUrl = 'http://localhost:8080/RetailShopping/api/orders';

  constructor(private http: HttpClient) { }

  getOrderById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getBuyerOrderHistory(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/buyerhistory/${id}`);
  }

  getSupplierOrders(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/supplierhistory/${id}`);
  }

  // uploadNewOrder(): Observable<any> {

  // }
}
