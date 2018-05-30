import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactService {

  result: any;
  constructor(private http: HttpClient) {}

  addContact(firstName, lastName, email, phone, status) {
    const uri = 'http://localhost:4000/contacts/add';
    const obj = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      status: status
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res =>
          console.log('Done'));
  }

  getContacts() {
    const uri = 'http://localhost:4000/contacts';
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  editContact(id) {
    const uri = 'http://localhost:4000/contacts/edit/' + id;
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  updateContact(firstName, lastName, email, phone, status, id) {
    const uri = 'http://localhost:4000/contacts/update/' + id;

    const obj = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      status: status
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res => console.log('Done'));
  }

  deleteContact(id) {
    const uri = 'http://localhost:4000/contacts/delete/' + id;

        return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }
}
