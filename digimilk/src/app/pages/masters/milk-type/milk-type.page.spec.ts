import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MilkTypePage } from './milk-type.page';

describe('MilkTypePage', () => {
  let component: MilkTypePage;
  let fixture: ComponentFixture<MilkTypePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MilkTypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
