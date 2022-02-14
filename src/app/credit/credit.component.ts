import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.scss']
})
export class CreditComponent implements OnInit {

  constructor(
    private route: Router,
  ) { }
  ngOnInit(): void {
  }
  creditConf(): void {
    this.route.navigateByUrl('/conf');
  }
}
