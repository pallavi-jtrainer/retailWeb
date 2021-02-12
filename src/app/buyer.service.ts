import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Buyer } from './buyer-dash/buyer';

@Injectable({
  providedIn: 'root'
})
export class BuyerService {

  private baseUrl = 'http://localhost:8080/RetailShopping/api/buyer';

  constructor(private http: HttpClient) { }

  /**
   * to get buyer details.
   * @param id for buyerId
   */
  getBuyerById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  /**
   * to register a buyer.
   * @param buyer for buyer info
   * @param user for username
   * @param pass for password
   */
  registerBuyer(buyer: Buyer, user: string, pass: string): Observable<any> {
    const header = {'content-type': 'application/json'};
    const body = JSON.stringify(buyer);

    return this.http.post(`${this.baseUrl}/register/${buyer.buyerName}/${buyer.addr}/`
      + `${buyer.contact}/${buyer.emailAddr}/${user}/${pass}`, body, {headers: header, responseType: 'text'});
  }

  /**
   * to update address.
   * @param buyer for buyer info
   * @param address for new address
   */
  updateAddress(buyer: Buyer, address: string): Observable<any> {
    const header = {'content-type': 'application/json'};
    const body = JSON.stringify(buyer);

    return this.http.put(`${this.baseUrl}/address/${buyer.buyerId}/${address}`,
        body, {headers: header, responseType: 'text'});
  }

  /**
   * to update phone.
   * @param buyer for buyer info
   * @param phone for phone
   */
  updatePhone(buyer: Buyer, phone: string): Observable<any> {
    const header = {'content-type': 'application/json'};
    const body = JSON.stringify(buyer);

    return this.http.put(`${this.baseUrl}/contact/${buyer.buyerId}/${phone}`,
        body, {headers: header, responseType: 'text'});
  }

  /**
   * to update email.
   * @param buyer for buyer info
   * @param email for email
   */
  updateEmail(buyer: Buyer, email: string): Observable<any> {
    const header = {'content-type': 'application/json'};
    const body = JSON.stringify(buyer);

    return this.http.put(`${this.baseUrl}/email/${buyer.buyerId}/${email}`,
        body, {headers: header, responseType: 'text'});
  }

  placeNewOrder(buyer: Buyer, id: number, qty: number): Observable<any> {
    const header = {'content-type': 'application/json'};
    const body = JSON.stringify(buyer);

    return this.http.post(`${this.baseUrl}/neworder/${id}/`
        + `${qty}/${buyer.buyerId}`, body, {headers: header, responseType: 'text'});
  }
}
