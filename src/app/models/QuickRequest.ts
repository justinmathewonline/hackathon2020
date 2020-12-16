
export class QuickRequest {
    VendorId;
    AmbulanceId;
    Latitude;
    Longitude;
    PhoneNumber;
    Source;
    IsAccepted;
  
    constructor(private vId, private aId, private lat, private lng,private phone, private source, private accepted) {  
      this.VendorId = vId;
      this.AmbulanceId = aId;
      this.Latitude = lat;
      this.Longitude = lng;
      this.PhoneNumber = phone;
      this.Source = source;
      this.IsAccepted = accepted;
    }
  
  }