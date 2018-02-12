import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormsModule, } from '@angular/forms';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { CustomerService } from '../services/customer.service';
import { CallService } from '../services/call.service';

@Component({
  selector: 'app-calls',
  templateUrl: './calls.component.html',
  styleUrls: ['./calls.component.css']
})
export class CallsComponent implements OnInit {

  calls: any;
  customers: any;

  viewState: boolean;
  callId: any;

  constructor(private customerService: CustomerService, private callService: CallService) { }

  ngOnInit() {
    this.customerService.getCustomers().subscribe(data => this.customers = data);

    this.callService.getCalls().subscribe(data => this.calls = data);
  }

  viewStatus(event, call) {
    this.viewState = !this.viewState;
    this.callId = call;
  }

}
