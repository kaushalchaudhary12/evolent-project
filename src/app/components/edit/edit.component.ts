import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from './../../contact.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  contact: any;
  contactForm: FormGroup;
  selectedRadioButtonValue: any;
  title = 'Edit Contact';
  constructor(private route: ActivatedRoute, private router: Router, private contactService: ContactService, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.contact = this.contactService.editContact(params['id']).subscribe(res => {
        this.contact = res;
      });
    });
  }

  createForm() {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required ],
      lastName: ['', Validators.required ],
      email: ['', [Validators.required, Validators.pattern('[^ @]*@[^ @]*')] ],
      phone: ['', Validators.required ],
      status: ['', Validators.required ],
   });
  }

  updateContact(firstName, lastName, email, phone, status) {
    status = this.selectedRadioButtonValue;
    this.route.params.subscribe(params => {
    this.contactService.updateContact(firstName, lastName, email, phone, status, params['id']);
    this.router.navigateByUrl('/index');
  });
}
}
