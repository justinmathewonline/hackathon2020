import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  public form= new FormGroup({
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

  }
}
