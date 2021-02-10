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
  constructor(private buyerService: BuyerService, private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
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
}
