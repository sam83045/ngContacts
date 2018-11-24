import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";

import { Contact } from "../model/contact";

@Injectable()
export class ContactManagerService {
    private baseURL: string;

    constructor(
        private http: HttpClient
    ) {
    }
    saveContact(contact: Contact): Observable<Contact> {
        return this.http.post<Contact>(`/api/contacts`, contact);
    }

    getAllContacts(): Observable<any> {
        return this.http.get('/api/contacts');
    }
}