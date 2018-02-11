import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormsModule, } from '@angular/forms';
import { CustomerService } from '../services/customer.service';

import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  customers: any;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getCustomers().subscribe(data => this.customers = data);
  }

}
