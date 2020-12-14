
export class Ambulances {
    VendorId;
    AmbulanceId;
    Type;
    RegNumber;
    Model;
    Facilities;
  
    constructor(private vId, private aId, private type, private regNumber, private model, private facilities) {  
      this.VendorId = vId;
      this.AmbulanceId = aId;
      this.Type = type;
      this.RegNumber = regNumber;
      this.Model = model;
      this.Facilities = facilities;
    }
  
  }