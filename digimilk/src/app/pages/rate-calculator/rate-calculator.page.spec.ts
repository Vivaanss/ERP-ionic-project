import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RateCalculatorPage } from './rate-calculator.page';

describe('RateCalculatorPage', () => {
  let component: RateCalculatorPage;
  let fixture: ComponentFixture<RateCalculatorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RateCalculatorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
