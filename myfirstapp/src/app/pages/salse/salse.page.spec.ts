import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SalsePage } from './salse.page';

describe('SalsePage', () => {
  let component: SalsePage;
  let fixture: ComponentFixture<SalsePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SalsePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
