import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ContactManagerService } from '../../services/contact-manager.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css'],
  providers: [ContactManagerService]
})
export class NewContactComponent implements OnInit {
  contactForm: FormGroup;
  constructor(
    private contactManagerService: ContactManagerService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: [null, [Validators.required]]
    });

    this.contactManagerService.getAllContacts().subscribe(data =>
      console.log(data));
  }

  onSubmit() {
    this.contactManagerService.saveContact(this.contactForm.value)
      .subscribe((data) => {
        console.log('Posted result', data);
      })
    console.log(this.contactForm);

  }

}
