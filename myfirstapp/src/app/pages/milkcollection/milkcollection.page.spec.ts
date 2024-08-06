import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MilkcollectionPage } from './milkcollection.page';

describe('MilkcollectionPage', () => {
  let component: MilkcollectionPage;
  let fixture: ComponentFixture<MilkcollectionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MilkcollectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
