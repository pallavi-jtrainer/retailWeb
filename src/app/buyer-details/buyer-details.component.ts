import { Router, ActivatedRoute } from '@angular/router';
import { Buyer } from './../buyer-dash/buyer';
import { Component, OnInit } from '@angular/core';
import { BuyerService } from '../buyer.service';

@Component({
  selector: 'app-buyer-details',
  templateUrl: './buyer-details.component.html',
  styleUrls: ['./buyer-details.component.css']
})
export class BuyerDetailsComponent implements OnInit {

  id: number;
  b: Buyer;
  phone = '';

  constructor(private buyerService: BuyerService, private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.b = new Buyer();

    // tslint:disable-next-line: radix
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));

    this.buyerService.getBuyerById(this.id)
      .subscribe(data => {
        console.log(data);
        this.b = data;
      }, error => console.log(error));
  }

  goHome() {

    // tslint:disable-next-line: radix
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.router.navigate(['/buyerdash', this.id]);
  }

  updatePhone(p: string) {
    console.log(p);
    this.buyerService.updatePhone(this.b, p)
      .subscribe(data => {
        console.log(data);
      }, error => console.log());
  }

  updateAddress(add: string) {
    console.log(add);
    this.buyerService.updateAddress(this.b, add)
      .subscribe(data => {
        console.log(data);
      }, error => console.log());
  }

  updateEmail(em: string) {
    console.log(em);
    this.buyerService.updateEmail(this.b, em)
      .subscribe(data => {
        console.log(data);
      }, error => console.log());
  }
}
