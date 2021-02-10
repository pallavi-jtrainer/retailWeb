import { SupplierService } from './../supplier.service';
import { Supplier } from './../supplier-dash/Supplier';
import { Items } from './items';
import { ItemsService } from './../items.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BuyerService } from './../buyer.service';
import { Buyer } from './../buyer-dash/buyer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  bId: number;
  b: Buyer;
  item: Items;
  id: number;
  sId: number;
  s: Supplier;

  constructor(private buyerService: BuyerService, private router: Router,
              private route: ActivatedRoute, private itemService: ItemsService,
              private supplierService: SupplierService) { }

  ngOnInit(): void {
    this.b = new Buyer();

    // tslint:disable-next-line: radix
    this.bId = parseInt(this.route.snapshot.paramMap.get('id2'));

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
    // tslint:disable-next-line: radix
    this.bId = parseInt(this.route.snapshot.paramMap.get('id2'));
    this.router.navigate(['/buyerdash', this.bId]);
  }

  updatePrice(p: number) {
    console.log(p);
  }
}
