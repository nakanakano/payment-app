import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

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
