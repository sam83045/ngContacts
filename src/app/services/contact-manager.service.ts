import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";

import { Contact } from "../model/contact";

@Injectable()
export class ContactManagerService {
    private baseURL: string;

    constructor(
        private http: HttpClient
    ) { }

    /**
     * Get all the contacts
     */
    getAllContacts(): Observable<Contact[]> {
        return this.http.get<Contact[]>('/api/contacts');
    }

    /**
     * Get single contact by id
     * @param contactId Contact ID of which contact data needs to be fetched
     */
    getContactById(contactId: string): Observable<Contact> {
        return this.http.get<Contact>(`/api/contacts/${contactId}`);
    }

    /**
     * Save contact into db
     * @param contact Contact Data
     */
    saveContact(contact: Contact): Observable<Contact> {
        return this.http.post<Contact>(`/api/contacts`, contact);
    }

    /**
     * Updates the contact data
     * @param contact Contact tobe updated
     */
    updateContact(contact: Contact): Observable<Contact> {
        return this.http.put<Contact>(`/api/contacts/${contact.id}`, contact);
    }

    /**
     * Deletes the contact by given ID
     * @param contactId ContactID to be deleted
     */
    delete(contactId: string): Observable<Contact> {
        return this.http.delete<Contact>(`/api/contacts/${contactId}`);
    }

}