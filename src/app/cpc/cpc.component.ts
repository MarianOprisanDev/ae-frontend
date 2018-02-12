import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormsModule, } from '@angular/forms';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { CustomerService } from '../services/customer.service';
import { CallService } from '../services/call.service';

@Component({
  selector: 'app-cpc',
  templateUrl: './cpc.component.html',
  styleUrls: ['./cpc.component.css']
})
export class CpcComponent implements OnInit {

  customers: any;
  calls: any;

  showMore: boolean;

  constructor(private customerService: CustomerService, private callService: CallService) { }

  ngOnInit() {
    this.customerService.getCustomers().subscribe(data => this.customers = data);
    this.callService.getCalls().subscribe(data => this.calls = data);

    this.showMore = true;
  }

}
