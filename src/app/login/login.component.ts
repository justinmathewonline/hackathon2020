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

  }
  authenticate() {
    // const { username, password } = body;
    // const user = users.find(x => x.username === username && x.password === password);
    // if (!user) return error('Username or password is incorrect');
    // return ok({
    //     ...basicDetails(user),
    //     token: 'fake-jwt-token'
    // })
  }
}
