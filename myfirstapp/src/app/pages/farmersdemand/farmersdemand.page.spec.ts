import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FarmersdemandPage } from './farmersdemand.page';

describe('FarmersdemandPage', () => {
  let component: FarmersdemandPage;
  let fixture: ComponentFixture<FarmersdemandPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmersdemandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
