import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RolespermissionPage } from './rolespermission.page';

describe('RolespermissionPage', () => {
  let component: RolespermissionPage;
  let fixture: ComponentFixture<RolespermissionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RolespermissionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
