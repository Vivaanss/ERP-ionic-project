import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SocietysalsePage } from './societysalse.page';

describe('SocietysalsePage', () => {
  let component: SocietysalsePage;
  let fixture: ComponentFixture<SocietysalsePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SocietysalsePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
