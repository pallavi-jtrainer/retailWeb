import { OrdersService } from './../orders.service';
import { SupplierService } from './../supplier.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Orders } from './../order-details/orders';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Supplier } from '../supplier-dash/Supplier';

@Component({
  selector: 'app-supplier-orders',
  templateUrl: './supplier-orders.component.html',
  styleUrls: ['./supplier-orders.component.css']
})
export class SupplierOrdersComponent implements OnInit {

  oId: number;
  sId: number;
  s: Supplier;
  orders: Observable<Orders[]>;

  constructor(private router: Router, private route: ActivatedRoute,
              private supplierService: SupplierService, private orderService: OrdersService) { }

  ngOnInit(): void {
    this.reloadData();
  }

  goHome() {
    this.router.navigate(['/suppdash', this.sId]);
  }

  loadDetails() {
    this.router.navigate(['/suppdetails', this.sId]);
  }

  reloadData() {

    // tslint:disable-next-line: radix
    this.sId = parseInt(this.route.snapshot.paramMap.get('id'));

    this.supplierService.getSupplierById(this.sId)
      .subscribe(data => {
        console.log(data);
        this.s = data;
      }, error => console.log(error));

    this.orderService.getSupplierOrders(this.sId)
      .subscribe(data => {
        console.log(data);
        this.orders = data;
      }, error => console.log(error));
  }

  showOrderDetails(id: number, sup: number) {}

  showPendingOrders() {}
}
