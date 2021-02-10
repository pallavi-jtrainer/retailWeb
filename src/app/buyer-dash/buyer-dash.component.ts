import { ItemsService } from './../items.service';
import { Observable } from 'rxjs';
import { Items } from '../item-details/items';
import { ActivatedRoute, Router } from '@angular/router';
import { BuyerService } from './../buyer.service';
import { Component, OnInit } from '@angular/core';
import { Buyer } from './buyer';

@Component({
  selector: 'app-buyer-dash',
  templateUrl: './buyer-dash.component.html',
  styleUrls: ['./buyer-dash.component.css']
})
export class BuyerDashComponent implements OnInit {

  buyername = '';
  id: number;
  b: Buyer;

  items: Observable<Items[]>;

  constructor(private buyerService: BuyerService, private router: Router,
              private route: ActivatedRoute, private itemService: ItemsService) { }

  ngOnInit(): void {
    this.b = new Buyer();

    // tslint:disable-next-line: radix
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));

    this.buyerService.getBuyerById(this.id)
      .subscribe(data => {
        console.log(data);
        this.b = data;
        this.buyername = this.b.buyerName;
      }, error => console.log(error));

    this.loadData();
  }

  loadData() {
    this.items = this.itemService.getAllItems();
  }

  loadDetails() {
    // tslint:disable-next-line: radix
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.router.navigate(['/buyerdetails', this.id]);
  }

  showMyOrders() {

  }

  showItemDetails(itemId: number, buyerId: number) {
    this.router.navigate(['/itemdetails', itemId, buyerId]);
  }

  placeOrder(itemId: number, buyerId: number) {
    this.router.navigate(['/invoice', itemId, buyerId]);
  }
}
