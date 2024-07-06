import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChillingPage } from './chilling.page';

describe('ChillingPage', () => {
  let component: ChillingPage;
  let fixture: ComponentFixture<ChillingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChillingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
