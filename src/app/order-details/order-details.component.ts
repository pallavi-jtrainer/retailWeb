import { OrdersService } from './../orders.service';
import { Orders } from './orders';
import { Buyer } from './../buyer-dash/buyer';
import { Component, OnInit } from '@angular/core';
import { Items } from '../item-details/items';
import { Supplier } from '../supplier-dash/Supplier';
import { BuyerService } from '../buyer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SupplierService } from '../supplier.service';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  bId: number;
  b: Buyer;
  item: Items;
  s: Supplier;
  order: Orders;
  oId: number;

  constructor(private buyerService: BuyerService, private router: Router,
              private route: ActivatedRoute, private itemService: ItemsService,
              private supplierService: SupplierService, private orderService: OrdersService) { }

  ngOnInit(): void {
    // tslint:disable-next-line: radix
    this.bId = parseInt(this.route.snapshot.paramMap.get('id1'));
    // tslint:disable-next-line: radix
    this.oId = parseInt(this.route.snapshot.paramMap.get('id'));

    this.b = new Buyer();

    this.buyerService.getBuyerById(this.bId)
      .subscribe(data => {
        console.log(data);
        this.b = data;
      }, error => console.log(error));

    this.loadInvoice();
  }

  loadInvoice() {
    this.orderService.getOrderById(this.oId)
      .subscribe(data => {
        console.log(data);
        this.order = data;
        this.itemService.getItemById(this.order.itemId)
          .subscribe(data1 => {
            console.log(data1);
            this.item = data1;
          });
        this.supplierService.getSupplierById(this.order.supplierId)
          .subscribe(data2 => {
            console.log(data2);
            this.s = data2;
          });
      }, error => console.log(error));
  }

  goHome() {
    this.router.navigate(['/buyerdash', this.bId]);
  }

  loadProfile() {
    this.router.navigate(['/buyerdetails', this.bId]);
  }

  myOrders() {
    this.router.navigate(['/buyerhistory', this.bId]);
  }
}
