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
  addr = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  registerUser() {

  }

  loadSignIn() {
    this.router.navigate(['login']);
  }
}
