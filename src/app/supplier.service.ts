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

  /**
   * get single supplier.
   * @param id for supplierId
   */
  getSupplierById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  /**
   * to register new supplier.
   * @param sup for supplier info
   * @param user for username
   * @param pass for password
   */
  registerSupplier(sup: Supplier, user: string, pass: string): Observable<any> {
    const header = {'content-type': 'application/json'};
    const body = JSON.stringify(sup);

    return this.http.post(`${this.baseUrl}/register/${sup.supplierName}/${sup.address}/`
      + `${sup.phoneNumber}/${sup.email}/${user}/${pass}`, body, {headers: header, responseType: 'text'});
  }

  /**
   * update status.
   * @param sup for supplier info
   * @param stat for status
   * @param amt for amount
   */
  updateStatus(sup: Supplier, stat: string, amt: number): Observable<any> {
    const header = {'content-type': 'application/json'};
    const body = JSON.stringify(sup);

    return this.http.put(`${this.baseUrl}/updatestatus/${sup.supplierId}/${stat}/`
        + `${amt}`, body, {headers: header, responseType: 'text'});
  }

  /**
   * to get the list of pending orders.
   * @param id for supplierId
   */
  pendingOrdersList(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/pending/${id}`);
  }

  /**
   * to get a list of all orders
   * @param id for supplierId
   */
  listAllOrders(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/history/${id}`);
  }

  /**
   * to update address.
   * @param sup for supplier info
   * @param address for new address
   */
  updateAddress(sup: Supplier, address: string): Observable<any> {
    const header = {'content-type': 'application/json'};
    const body = JSON.stringify(sup);

    return this.http.put(`${this.baseUrl}/address/${sup.supplierId}/${address}`,
        body, {headers: header, responseType: 'text'});
  }

  /**
   * to update phone.
   * @param sup for supplier info
   * @param phone for phone
   */
  updatePhone(sup: Supplier, phone: string): Observable<any> {
    const header = {'content-type': 'application/json'};
    const body = JSON.stringify(sup);

    return this.http.put(`${this.baseUrl}/contact/${sup.supplierId}/${phone}`,
        body, {headers: header, responseType: 'text'});
  }

  /**
   * to update email.
   * @param sup for supplier info
   * @param email for email
   */
  updateEmail(sup: Supplier, email: string): Observable<any> {
    const header = {'content-type': 'application/json'};
    const body = JSON.stringify(sup);

    return this.http.put(`${this.baseUrl}/email/${sup.supplierId}/${email}`,
        body, {headers: header, responseType: 'text'});
  }
}
