import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubcriptionsPage } from './subcriptions.page';

describe('SubcriptionsPage', () => {
  let component: SubcriptionsPage;
  let fixture: ComponentFixture<SubcriptionsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcriptionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
