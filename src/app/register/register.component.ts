import { Supplier } from './../supplier-dash/Supplier';
import { Buyer } from './../buyer-dash/buyer';
import { SupplierService } from './../supplier.service';
import { BuyerService } from './../buyer.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userName = '';
  userType = '';
  contact = '';
  emailAddr = '';
  passcode = '';
  passAgain = '';
  address = '';
  uName = '';

  buyer: Buyer = new Buyer();
  sup: Supplier = new Supplier();

  constructor(private router: Router, private buyerService: BuyerService,
              private supplierService: SupplierService) { }

  ngOnInit(): void {
  }

  registerUser() {
    if (this.userType === 'BUYER' && this.passcode === this.passAgain) {
      this.buyer.buyerName = this.uName;
      this.buyer.addr = this.address;
      this.buyer.contact = this.contact;
      this.buyer.emailAddr = this.emailAddr;
      this.buyerService.registerBuyer(this.buyer, this.userName, this.passcode)
        .subscribe(data => {
          console.log(data);
          this.loadSignIn();
        }, error => console.log(error));
    }

    if (this.userType === 'SUPPLIER' && this.passcode === this.passAgain) {
      this.sup.supplierName = this.uName;
      this.sup.address = this.address;
      this.sup.contact = this.contact;
      this.sup.emailAddr = this.emailAddr;
      this.supplierService.registerSupplier(this.sup, this.userName, this.passcode)
        .subscribe(data => {
          console.log(data);
          this.loadSignIn();
        }, error => console.log(error));
    }
  }

  loadSignIn() {
    this.router.navigate(['login']);
  }
}
