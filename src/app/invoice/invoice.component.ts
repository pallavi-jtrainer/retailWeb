import { OrdersService } from './../orders.service';
import { SupplierService } from './../supplier.service';
import { Supplier } from './../supplier-dash/Supplier';
import { ItemsService } from './../items.service';
import { BuyerService } from './../buyer.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Items } from './../item-details/items';
import { Buyer } from './../buyer-dash/buyer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  b: Buyer;
  bId: number;
  id: number;
  item: Items;
  s: Supplier;
  sId: number;

  constructor(private router: Router, private route: ActivatedRoute,
              private buyerService: BuyerService, private itemService: ItemsService,
              private supplierService: SupplierService, private orderService: OrdersService) { }

  ngOnInit(): void {
    this.b = new Buyer();

    // tslint:disable-next-line: radix
    this.bId = parseInt(this.route.snapshot.paramMap.get('id1'));

    this.buyerService.getBuyerById(this.bId)
      .subscribe(data => {
        console.log(data);
        this.b = data;
      }, error => console.log(error));

    this.loadPage();
  }

  goHome() {
    // tslint:disable-next-line: radix
    this.bId = parseInt(this.route.snapshot.paramMap.get('id2'));
    this.router.navigate(['/buyerdash', this.bId]);
  }

  loadPage() {
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
}
