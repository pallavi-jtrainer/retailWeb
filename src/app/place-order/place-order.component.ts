import { OrdersService } from './../orders.service';
import { ItemsService } from './../items.service';
import { BuyerService } from './../buyer.service';
import { SupplierService } from './../supplier.service';
import { Supplier } from './../supplier-dash/Supplier';
import { Buyer } from './../buyer-dash/buyer';
import { Component, OnInit } from '@angular/core';
import { Items } from '../item-details/items';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css'],
  providers: [DatePipe]
})
export class PlaceOrderComponent implements OnInit {

  bId: number;
  b: Buyer;
  item: Items;
  id: number;
  sId: number;
  s: Supplier;
  quantity = 1;
  total = 0;
  curDate = new Date();
  str: string;

  constructor(private buyerService: BuyerService, private router: Router,
              private route: ActivatedRoute, private itemService: ItemsService,
              private supplierService: SupplierService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.b = new Buyer();
    this.str = this.datePipe.transform(this.curDate, 'yyyy-MM-dd');
    // this.curDate = new Date(this.str);
    // console.log(this.curDate);

    // tslint:disable-next-line: radix
    this.bId = parseInt(this.route.snapshot.paramMap.get('id1'));

    this.buyerService.getBuyerById(this.bId)
      .subscribe(data => {
        console.log(data);
        this.b = data;
      }, error => console.log(error));

    this.reloadData();
  }

  reloadData() {
    this.item = new Items();
    this.s = new Supplier();

    // tslint:disable-next-line: radix
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));

    this.itemService.getItemById(this.id)
      .subscribe(data => {
        console.log(data);
        this.item = data;
        this.sId = this.item.supplierId;
        this.supplierService.getSupplierById(this.sId)
          .subscribe(data1 => {
            console.log(data1);
            this.s = data1;
          }, error => console.log(error));
      }, error => console.log(error));
  }

  goHome() {
    console.log(this.bId);
    this.router.navigate(['/buyerdash', this.bId]);
  }

  placeOrder() {

  }
}
