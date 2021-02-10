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
