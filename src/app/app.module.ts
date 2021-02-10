import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BuyerDashComponent } from './buyer-dash/buyer-dash.component';
import { SupplierDashComponent } from './supplier-dash/supplier-dash.component';
import { BuyerDetailsComponent } from './buyer-details/buyer-details.component';
import { ItemsComponent } from './items/items.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { InlineEditComponent } from './inline-edit/inline-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    BuyerDashComponent,
    SupplierDashComponent,
    BuyerDetailsComponent,
    ItemsComponent,
    ItemDetailsComponent,
    InlineEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
