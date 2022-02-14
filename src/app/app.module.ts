import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectPaymentComponent } from './select-payment/select-payment.component';
import { BTComponent } from './b-t/b-t.component';
import { CreditComponent } from './credit/credit.component';
import { WalletComponent } from './wallet/wallet.component';
import { ThanksComponent } from './thanks/thanks.component';
import { FormsModule } from '@angular/forms';
import { CreditConfComponent } from './credit-conf/credit-conf.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectPaymentComponent,
    BTComponent,
    CreditComponent,
    WalletComponent,
    ThanksComponent,
    CreditConfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
