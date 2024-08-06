import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MastersPage } from './masters.page';

describe('MastersPage', () => {
  let component: MastersPage;
  let fixture: ComponentFixture<MastersPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MastersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
