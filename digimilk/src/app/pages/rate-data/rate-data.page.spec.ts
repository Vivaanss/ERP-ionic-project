import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RateDataPage } from './rate-data.page';

describe('RateDataPage', () => {
  let component: RateDataPage;
  let fixture: ComponentFixture<RateDataPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RateDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
