export class Contact {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: number;
    constructor() {
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.phone = null;
    }
}