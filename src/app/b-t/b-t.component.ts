import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-b-t',
  templateUrl: './b-t.component.html',
  styleUrls: ['./b-t.component.scss']
})
export class BTComponent implements OnInit {

  constructor(
    private route: Router,
  ) { }
  ngOnInit(): void {
  }
  goBt(): void {
    // window.open( 'http://localhost:54718/', '_blank' , 'width=500,toolbar=yes,menubar=yes,scrollbars=yes');

  }
}
