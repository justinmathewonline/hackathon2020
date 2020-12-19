export class BookAmbulanceModel {

    hospitalName;
    appointmentDate;
    ambulanceType;
    vechileType;
    MedicalFacilities;
    PatientPhoneNumber;
    constructor(private hp, private aDate, private aype, private vType, private MFacility, private PPhoneNumber) {  
        this.hospitalName = hp;
        this.appointmentDate=aDate;
        this.ambulanceType=aype;
        this.vechileType=vType;
        this.MedicalFacilities=MFacility;
        this.PatientPhoneNumber=PPhoneNumber;

}
}