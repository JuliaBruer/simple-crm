export class Company {
    companyName: string;
    mail: string;
    phoneNumber: number;
    website: string;
    companyHeadquarters: string;

    constructor(obj?: any) {
        this.companyName = obj ? obj.companyName : '';
        this.mail = obj ? obj.mail : '';
        this.phoneNumber = obj ? obj.phoneNumber : '';
        this.website = obj ? obj.website : '';
        this.companyHeadquarters = obj ? obj.companyHeadquarters : '';
    }

    public toJSON() {
        return {
            companyName: this.companyName,
            mail: this.mail,
            phoneNumber: this.phoneNumber,
            website: this.website,
            companyHeadquarters: this.companyHeadquarters
        };
    }
}