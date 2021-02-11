import { Observable } from 'rxjs';
import { Orders } from './../order-details/orders';
import { Buyer } from './../buyer-dash/buyer';
import { OrdersService } from './../orders.service';
import { BuyerService } from './../buyer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buyer-orders',
  templateUrl: './buyer-orders.component.html',
  styleUrls: ['./buyer-orders.component.css']
})
export class BuyerOrdersComponent implements OnInit {

  id: number;
  b: Buyer;
  orders: Observable<Orders[]>;

  constructor(private route: ActivatedRoute, private router: Router,
              private buyerService: BuyerService, private orderService: OrdersService) { }

  ngOnInit(): void {
    // tslint:disable-next-line: radix
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));

    this.b = new Buyer();
    this.buyerService.getBuyerById(this.id)
      .subscribe(data => {
        console.log(data);
        this.b = data;
      }, error => console.log(error));

    this.loadOrders();
  }

  loadOrders() {
    this.orderService.getBuyerOrderHistory(this.id)
      .subscribe(data => {
        console.log(data);
        this.orders = data;
      }, error => console.log(error));
  }

  loadDetails() {
    this.router.navigate(['/buyerdetails', this.id]);
  }

  goHome() {
    this.router.navigate(['/buyerdash', this.id]);
  }
  showOrderDetails(oId: number, bId: number) {
    this.router.navigate(['/invoice', oId, bId]);
  }
}
