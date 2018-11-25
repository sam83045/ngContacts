import { Component, OnInit } from '@angular/core';
import { Contact } from '../../model/contact';
import { ContactManagerService } from '../../services/contact-manager.service';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
  providers:[ContactManagerService]
})
export class ContactListComponent implements OnInit {
  public contacts: Contact[];
  constructor(
    private contactManagerService: ContactManagerService
  ) { }

  ngOnInit() {
    this.contactManagerService.getAllContacts().subscribe((contacts: Contact[]) => {
      this.contacts = contacts;
    })
  }

}
