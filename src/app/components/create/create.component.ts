import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../contact.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  title = 'Add Contact';
  contactForm: FormGroup;
  selectedRadioButtonValue: any;
  constructor(private contactService: ContactService, private fb: FormBuilder, private router: Router) {
    this.createForm();
   }
   
  ngOnInit() {
  }

  createForm() {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required ],
      lastName: ['', Validators.required ],
      email: ['', [Validators.required, Validators.pattern('[^ @]*@[^ @]*')] ],
      phone: ['', Validators.required ],
      status: ['', Validators.required ]
   });
  }
  
  addContact(firstName, lastName, email, phone, status) {
    status = this.selectedRadioButtonValue;
    this.contactService.addContact(firstName, lastName, email, phone, status);
    alert('Contact added successfully');
    this.contactForm.reset();
  }
}
