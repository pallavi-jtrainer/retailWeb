import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerDashComponent } from './buyer-dash.component';

describe('BuyerDashComponent', () => {
  let component: BuyerDashComponent;
  let fixture: ComponentFixture<BuyerDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
