import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SocietydemandsPage } from './societydemands.page';

describe('SocietydemandsPage', () => {
  let component: SocietydemandsPage;
  let fixture: ComponentFixture<SocietydemandsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SocietydemandsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
