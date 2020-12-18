export class BookAmbulanceModel {

    hospital;
    appointmentDate;
    ambulanceType;
    vehicleType;
    MedicalFacilities;
    PatientPhoneNumber;
    constructor(private hp, private aDate, private aype, private vType, private MFacility, private PPhoneNumber) {  
        this.hospital = hp;
        this.appointmentDate=aDate;
        this.ambulanceType=aype;
        this.vehicleType=vType;
        this.MedicalFacilities=MFacility;
        this.PatientPhoneNumber=PPhoneNumber;

}
}