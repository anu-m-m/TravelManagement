import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';



@NgModule({
  declarations: [
    CustomerComponent,
    ListCustomerComponent,
    AddCustomerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CustomerModule { }
