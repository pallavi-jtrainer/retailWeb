import { SupplierService } from './../supplier.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Supplier } from './../supplier-dash/Supplier';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supplier-details',
  templateUrl: './supplier-details.component.html',
  styleUrls: ['./supplier-details.component.css']
})
export class SupplierDetailsComponent implements OnInit {

  s: Supplier;
  id: number;

  constructor(private route: ActivatedRoute, private router: Router,
              private supplierService: SupplierService) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    // tslint:disable-next-line: radix
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));

    this.s = new Supplier();

    this.supplierService.getSupplierById(this.id)
      .subscribe(data => {
        console.log(data);
        this.s = data;
      }, error => console.log(error));
  }
  goHome() {
    this.router.navigate(['/suppdash', this.id]);
  }

  showMyOrders() {

  }

  showPendingOrders() {

  }

  updatePhone(p: string) {
    console.log(p);
    this.supplierService.updatePhone(this.s, p)
      .subscribe(data => {
        console.log(data);
      }, error => console.log(error));
  }

  updateAddress(add: string) {
    console.log(add);
    this.supplierService.updateAddress(this.s, add)
      .subscribe(data => {
        console.log(data);
      }, error => console.log(error));
  }

  updateEmail(em: string) {
    console.log(em);
    this.supplierService.updateEmail(this.s, em)
      .subscribe(data => {
        console.log(data);
      }, error => console.log(error));
  }
}
