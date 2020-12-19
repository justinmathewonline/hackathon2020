
export class AvailableAmbulances {
    id;
    vendorId;
    ambulanceId;
    latitude;
    longitude;
    label;
    isOnService;
  
    constructor(private avid, private vId, private aId, private lat, private lng, private lab, private onservice) {  
      this.id = avid;
      this.vendorId = vId;
      this.ambulanceId = aId;
      this.latitude = lat;
      this.longitude = lng;
      this.label = lab;
      this.isOnService = onservice;
    }
  
  }