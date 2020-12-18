
export class QuickRequest {
  id;
  vendorId;
  ambulanceId;
  latitude;
  longitude;
  phoneNumber;
  source;
  status;
  vendorName;
  driverContact;
  regNumber;

  constructor(private qid, private vId, private aId, private lat, private lng, private phone, private src, private stat
    , private vName, private dCont, private regNum) {
    this.id = qid;
    this.vendorId = vId;
    this.ambulanceId = aId;
    this.latitude = lat;
    this.longitude = lng;
    this.phoneNumber = phone;
    this.source = src;
    this.status = stat;
    this.vendorName = vName;
    this.driverContact = dCont;
    this.regNumber = regNum;
  }

}