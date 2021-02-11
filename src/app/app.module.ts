import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BackButtonDisableModule } from 'angular-disable-browser-back-button';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BuyerDashComponent } from './buyer-dash/buyer-dash.component';
import { SupplierDashComponent } from './supplier-dash/supplier-dash.component';
import { BuyerDetailsComponent } from './buyer-details/buyer-details.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { InlineEditComponent } from './inline-edit/inline-edit.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { SupplierDetailsComponent } from './supplier-details/supplier-details.component';
import { AddItemComponent } from './add-item/add-item.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { BuyerOrdersComponent } from './buyer-orders/buyer-orders.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    BuyerDashComponent,
    SupplierDashComponent,
    BuyerDetailsComponent,
    ItemDetailsComponent,
    InlineEditComponent,
    OrderDetailsComponent,
    SupplierDetailsComponent,
    AddItemComponent,
    PlaceOrderComponent,
    BuyerOrdersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BackButtonDisableModule.forRoot({
      preserveScrollPosition: true
    }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
