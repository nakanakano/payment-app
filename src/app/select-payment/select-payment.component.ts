import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-select-payment',
  templateUrl: './select-payment.component.html',
  styleUrls: ['./select-payment.component.scss']
})
export class SelectPaymentComponent implements OnInit {

  constructor(
    private route: Router,
  ) { }

  ngOnInit(): void {
  }
  getPayment(method: string): void {
    this.route.navigateByUrl(method);
    console.log(method);
  }

}
