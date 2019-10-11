import { Component, OnInit } from '@angular/core';
import { Contact } from '../../model/contact';
import { ContactManagerService } from '../../services/contact-manager.service';
import { ToasterService } from 'angular2-toaster';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
  providers: [ContactManagerService]
})
export class ContactListComponent implements OnInit {
  public contacts: Contact[];
  public searchContact: string;
  constructor(
    private contactManagerService: ContactManagerService,
    private toasterService: ToasterService
  ) { }

  ngOnInit() {
    this.refreshList();
  }

  refreshList() {
    this.contactManagerService.getAllContacts().subscribe((contacts: Contact[]) => {
      this.contacts = contacts;
    });
  }

  /**
   * Deletes the contact
   */
  onDelete(contactId: string) {
    this.contactManagerService.delete(contactId).subscribe((data) => {
      this.toasterService.pop('success', null, "Contact deleted successfully!");
      this.refreshList();
    });
  }

}
