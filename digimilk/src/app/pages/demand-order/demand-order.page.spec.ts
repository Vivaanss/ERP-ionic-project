import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DemandOrderPage } from './demand-order.page';

describe('DemandOrderPage', () => {
  let component: DemandOrderPage;
  let fixture: ComponentFixture<DemandOrderPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandOrderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
