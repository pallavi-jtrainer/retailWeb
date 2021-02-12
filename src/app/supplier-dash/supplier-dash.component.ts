import { OrdersService } from './../orders.service';
import { ItemsService } from './../items.service';
import { SupplierService } from './../supplier.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Items } from './../item-details/items';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Supplier } from './Supplier';
import { Orders } from '../order-details/orders';

@Component({
  selector: 'app-supplier-dash',
  templateUrl: './supplier-dash.component.html',
  styleUrls: ['./supplier-dash.component.css']
})
export class SupplierDashComponent implements OnInit {

  sId: number;

  s: Supplier;
  suppliername = '';

  items: Observable<Items[]>;
  item: Items = new Items();

  orders: Observable<Orders[]>;

  constructor(private router: Router, private supplierService: SupplierService,
              private itemService: ItemsService, private route: ActivatedRoute,
              private orderService: OrdersService) { }

  ngOnInit(): void {

    // tslint:disable-next-line: radix
    this.sId = parseInt(this.route.snapshot.paramMap.get('id'));

    this.itemService.filterBySupplier(this.sId)
      .subscribe(data => {
        console.log(data);
        this.items = data;
      }, error => console.log(error));

    this.supplierService.getSupplierById(this.sId)
      .subscribe(data => {
        console.log(data);
        this.s = data;
        this.suppliername = this.s.supplierName;
      });
  }

  loadDetails() {
    this.router.navigate(['/suppdetails', this.sId]);
  }

  showMyOrders() {
    this.router.navigate(['/supplierhistory', this.sId]);
  }

  showPendingOrders() {
    this.router.navigate(['/pendingorders', this.sId]);
  }

  addNewItem() {
    this.router.navigate(['/addItem', this.sId]);
  }

  updatePrice(i: number, p: number) {
    this.itemService.getItemById(i)
      .subscribe(data => {
        console.log(data);
        this.item = data;
        this.itemService.updatePrice(this.item, p)
          .subscribe(data1 => {
            console.log(data);
          }, error => console.log(error));
      }, error => console.log(error));
  }
}
