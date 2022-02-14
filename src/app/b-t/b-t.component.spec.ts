import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BTComponent } from './b-t.component';

describe('BTComponent', () => {
  let component: BTComponent;
  let fixture: ComponentFixture<BTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
