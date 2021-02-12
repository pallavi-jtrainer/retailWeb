import { LoginService } from './../login.service';
import { Login } from './login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = new Login();
  userName = '';
  passWord = '';
  usertype = '';

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  signin() {
    // console.log(this.passWord);
    this.loginService.getUserById(this.userName)
      .subscribe(data => {
        console.log(data);
        this.login = data;
        if (this.passWord === this.login.password) {
          if (this.login.userType === 'BUYER') {
            this.router.navigate(['buyerdash/', this.login.userId]);
          }
          if (this.login.userType === 'SUPPLIER') {
            this.router.navigate(['suppdash/', this.login.userId]);
          }
        } else {
          alert('Wrong Username or Password! Please try again');
        }
        if (Object.keys(this.login).length === 0) {
          alert('Username or Password is Wrong! Please register if you are new here!');
        }
    });
  }

  signup() {
    this.router.navigate(['signup']);
  }
}
