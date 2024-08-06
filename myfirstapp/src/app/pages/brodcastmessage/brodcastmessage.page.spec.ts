import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrodcastmessagePage } from './brodcastmessage.page';

describe('BrodcastmessagePage', () => {
  let component: BrodcastmessagePage;
  let fixture: ComponentFixture<BrodcastmessagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BrodcastmessagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
