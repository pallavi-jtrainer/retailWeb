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

  getBuyerById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  registerBuyer(buyer: Buyer, user: string, pass: string): Observable<any> {
    const header = {'content-type': 'application/json'};
    const body = JSON.stringify(buyer);

    return this.http.post(`${this.baseUrl}/register/${buyer.buyerName}/${buyer.address}/`
      + `${buyer.contact}/${buyer.emailAddr}/${user}/${pass}`, body, {headers: header, responseType: 'text'});
  }
}
