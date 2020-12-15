import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { RegistrationService } from '../registration/service/registration.service';
import { Users } from '../models/Users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private service: RegistrationService) { }
  private users: Users[];
  public form = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl('')
  })

  ngOnInit(): void {
  }
  onCancel() {
    this.router.navigate(['/home']);
  }
  signUp() {
    this.router.navigate(['/registration']);
  }
  login() {
    this.authenticate();
  }
  authenticate() {
    this.service.getVendors().subscribe(data => {
      this.users = data;
      const user = this.users.find(x => x.UserName === this.form.controls.userName.value && x.Password === this.form.controls.password.value);
      if (!user) {alert('Username or password is incorrect');}
      else if(user !== undefined){
        localStorage.setItem("isUserLoggedIn", "true");
        localStorage.setItem("role",user.Role);
        localStorage.setItem("vendorId", user.VendorId);
        this.router.navigate(['/profile']);
      }
    });
  }
}

