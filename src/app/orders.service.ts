import { Orders } from './order-details/orders';
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

  uploadNewOrder(order: Orders): Observable<any> {
    const header = {'content-type': 'application/json'};
    const body = JSON.stringify(order);

    return this.http.post(`${this.baseUrl}/placeOrder/${order.orderDate}/${order.buyerId}/`
      + `${order.supplierId}/${order.itemId}/${order.itemQuantity}`,
      body, {headers: header, responseType: 'text'});
  }

  getOrderAmount(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/amount/${id}`);
  }
}
