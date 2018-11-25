import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
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
      lastName: [''],
      email: [''],
      phone: [null, [Validators.required, CustomValidator.numeric]]
    });

  }

  // convenience getter for easy access to form fields
  get f() { return this.contactForm.controls; }

  onSubmit() {
    this.contactManagerService.saveContact(this.contactForm.value)
      .subscribe((data) => {
        this.contactForm.reset();
      })
    console.log(this.contactForm);
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