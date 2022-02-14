import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  BTComponent } from './b-t/b-t.component';
import {  CreditComponent } from './credit/credit.component';
import {  SelectPaymentComponent } from './select-payment/select-payment.component';
import {  WalletComponent } from './wallet/wallet.component';
import {  ThanksComponent } from './thanks/thanks.component';
import {  CreditConfComponent } from './credit-conf/credit-conf.component';


const routes: Routes = [
  { path: '', redirectTo: '/top', pathMatch: 'full' },
  { path: 'top', component: SelectPaymentComponent },
  { path: 'bt', component: BTComponent },
  { path: 'credit', component: CreditComponent },
  { path: 'conf', component: CreditConfComponent },
  { path: 'wallet', component: WalletComponent },
  { path: 'thanks', component: ThanksComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
