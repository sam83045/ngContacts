import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ContactManagerService } from '../../services/contact-manager.service';
import { Contact } from '../../model/contact';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css'],
  providers: [ContactManagerService]
})
export class NewContactComponent implements OnInit {
  public contactId: string;
  contactForm: FormGroup;
  constructor(
    private contactManagerService: ContactManagerService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      id: [''],
      firstName: ['', [Validators.required]],
      lastName: [''],
      email: ['',[Validators.email]],
      phone: [null, [Validators.required, Validators.minLength(7) ,CustomValidator.numeric]]
    });

    this.activatedRoute.params.subscribe((params) => {
      this.contactId = params['contactId'];
      if (this.contactId) {
        this.contactManagerService.getContactById(this.contactId).subscribe((contact: Contact) => {
          this.contactForm.setValue(contact);
        });
      }
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.contactForm.controls; }

  onSubmit() {
    let conctactObservable: Observable<Contact>;
    if (this.contactId) {
      conctactObservable = this.contactManagerService.updateContact(this.contactForm.value);
    } else {
      conctactObservable = this.contactManagerService.saveContact(this.contactForm.value);
    }
    conctactObservable.subscribe(() => {
      this.contactForm.reset();
    });
  }

}


export class CustomValidator {
  // Number only validation
  static numeric(control: AbstractControl) {
    let val = control.value;

    if (val === null || val === '') return null;

    if (!val.toString().match(/^[0-9]+(\.?[0-9]+)?$/)) return { 'invalidNumber': true };

    return null;
  }
}