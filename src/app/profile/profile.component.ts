import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }
  public role: string;
  ngOnInit(): void {
  }

  customMenu(){
    this.role =  localStorage.getItem("role");
  }

}
