import { PendingOrdersComponent } from './pending-orders/pending-orders.component';
import { SupplierOrdersComponent } from './supplier-orders/supplier-orders.component';
import { AddItemComponent } from './add-item/add-item.component';
import { SupplierDetailsComponent } from './supplier-details/supplier-details.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { BuyerOrdersComponent } from './buyer-orders/buyer-orders.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { BuyerDetailsComponent } from './buyer-details/buyer-details.component';
import { SupplierDashComponent } from './supplier-dash/supplier-dash.component';
import { BuyerDashComponent } from './buyer-dash/buyer-dash.component';
import { RegisterComponent } from './register/register.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: RegisterComponent},
  {path: 'buyerdash/:id', component: BuyerDashComponent},
  {path: 'suppdash/:id', component: SupplierDashComponent},
  {path: 'buyerdetails/:id', component: BuyerDetailsComponent},
  {path: 'itemdetails/:id/:id2', component: ItemDetailsComponent},
  {path: 'placeorder/:id/:id1', component: PlaceOrderComponent},
  {path: 'buyerhistory/:id', component: BuyerOrdersComponent},
  {path: 'invoice/:id/:id1', component: OrderDetailsComponent},
  {path: 'suppdetails/:id', component: SupplierDetailsComponent},
  {path: 'additem/:id', component: AddItemComponent},
  {path: 'supplierhistory/:id', component: SupplierOrdersComponent},
  {path: 'pendingorders/:id', component: PendingOrdersComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
