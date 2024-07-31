import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FarmerDemandPage } from './farmer-demand.page';

describe('FarmerDemandPage', () => {
  let component: FarmerDemandPage;
  let fixture: ComponentFixture<FarmerDemandPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerDemandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
