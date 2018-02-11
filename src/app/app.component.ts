import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators, FormsModule, } from '@angular/forms';
import { CustomerService } from './services/customer.service';

import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
