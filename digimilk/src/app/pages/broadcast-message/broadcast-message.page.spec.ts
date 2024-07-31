import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BroadcastMessagePage } from './broadcast-message.page';

describe('BroadcastMessagePage', () => {
  let component: BroadcastMessagePage;
  let fixture: ComponentFixture<BroadcastMessagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BroadcastMessagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
