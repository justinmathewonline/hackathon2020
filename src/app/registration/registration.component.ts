import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { RegistrationService } from '../registration/service/registration.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
 
  constructor(private router: Router, private service: RegistrationService) { }
  public form = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
    organization: new FormControl(''),
    name: new FormControl(''),
    address: new FormControl(''),
    mobile: new FormControl(''),
    email: new FormControl(''),
    freeRegister: new FormControl(''),
    subscribe: new FormControl('')
  });
  ngOnInit(): void {
  }
 
  onCancel() {
    this.router.navigate(['/home']);
  }
  onClickregister() {​​
    this.router.navigate(['/subscribe']);
  }​​
  onCheckChange(type: any) {
    if (type === 'F') {
      this.form.controls.subscribe.setValue(false);
    }
    else if (type === 'S') {
      this.form.controls.freeRegister.setValue(false);
    }
  }
 
  onRegister() {
    this.service.getVendors().subscribe(data => {
      const args = {
        id: (data.length + 1).toString(),
        VendorId: "v" + this.form.controls["name"].value,
        UserName: this.form.controls["userName"].value,
        Password: this.form.controls["password"].value,
        Organization: this.form.controls["organization"].value,
        Name: this.form.controls["name"].value,
        Address: this.form.controls["address"].value,
        Mobile: this.form.controls["mobile"].value,
        Email: this.form.controls["email"].value,
        Subscribe: this.form.controls.subscribe.value === true ? "Yes" : "No",
        Role: this.form.controls["organization"].value === "1" ? "3" : "2"
      };
      this.service.addVendor(args).subscribe(data =>{
        if(this.form.controls.subscribe.value === true){
          this.router.navigate(['/subscribe']);
        }
      });      
    });    
  } 
}