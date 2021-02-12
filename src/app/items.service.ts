import { Items } from './item-details/items';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private baseUrl = 'http://localhost:8080/RetailShopping/api/items';

  constructor(private http: HttpClient) { }

  /**
   * to retrieve all items.
   */
  getAllItems(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  /**
   * to get item details.
   * @param id for item id
   */
  getItemById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  /**
   * to update item price.
   * @param item for item
   * @param newPrice for new price
   */
  updatePrice(item: Items, newPrice: number): Observable<any> {
    const header = {'content-type': 'application/json'};
    const body = JSON.stringify(item);

    return this.http.put(`${this.baseUrl}/updateprice/${item.itemId}/${newPrice}`,
        body, {headers: header, responseType: 'text'});
  }

  /**
   * to get all items for a particular supplier.
   * @param sId for supplierId
   */
  filterBySupplier(sId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/supplier/${sId}`);
  }

  /**
   * to get items by category.
   * @param cat for category
   */
  filterByCategory(cat: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/category/${cat}`);
  }
}
