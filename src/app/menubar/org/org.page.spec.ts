import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrgPage } from './org.page';

describe('OrgPage', () => {
  let component: OrgPage;
  let fixture: ComponentFixture<OrgPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
