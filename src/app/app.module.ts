import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { CustomerService } from './services/customer.service';
import { CallService } from './services/call.service';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CallsComponent } from './calls/calls.component';
import { CpcComponent } from './cpc/cpc.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'calls',
    component: CallsComponent
  },
  {
    path: 'cpc',
    component: CpcComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    FooterComponent,
    CallsComponent,
    CpcComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot( routes, { enableTracing: false })
  ],
  providers: [CustomerService, CallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
