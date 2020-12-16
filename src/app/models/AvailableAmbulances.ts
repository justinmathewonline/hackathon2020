
export class AvailableAmbulances {
    VendorId;
    AmbulanceId;
    Latitude;
    Longitude;
    Label;
  
    constructor(private vId, private aId, private lat, private lng, private label) {  
      this.VendorId = vId;
      this.AmbulanceId = aId;
      this.Latitude = lat;
      this.Longitude = lng;
      this.Label = label;
    }
  
  }