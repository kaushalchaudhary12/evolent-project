import { ContactService } from './../../contact.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Contact } from '../../Contact';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  contacts: any;

  constructor(private http: HttpClient, private contactService: ContactService) {}

  ngOnInit() {
    this.getContacts();
  }

  getContacts() {
    this.contactService.getContacts().subscribe(res => {
      this.contacts = res;
    });
  }

  deleteContact(id) {
    this.contactService.deleteContact(id).subscribe(res => {
      console.log('Deleted');
    });
    this.ngOnInit();
  }
}
