
export class Users {
    id;
    VendorId;
    UserName;
    Password;
    Organization;
    Name;
    Address;
    Mobile;
    Email;
    Subscribe;
    Role;
  
    constructor(private uId, private vId, private uName, private pswd, private org, private name, private addess, private mobile, private email, private subscribe, private role) {
      this.id = uId;
      this.VendorId = vId;
      this.UserName = uName;
      this.Password = pswd;
      this.Organization = org;
      this.Name = name;
      this.Address = addess;
      this.mobile = mobile;
      this.Email = email;
      this.Subscribe = subscribe;
      this.Role = role;
    }
  
  }