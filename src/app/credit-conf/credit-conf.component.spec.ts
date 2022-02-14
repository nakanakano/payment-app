import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditConfComponent } from './credit-conf.component';

describe('CreditConfComponent', () => {
  let component: CreditConfComponent;
  let fixture: ComponentFixture<CreditConfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditConfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditConfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
