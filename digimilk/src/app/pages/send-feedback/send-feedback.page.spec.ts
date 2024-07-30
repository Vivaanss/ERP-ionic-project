import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SendFeedbackPage } from './send-feedback.page';

describe('SendFeedbackPage', () => {
  let component: SendFeedbackPage;
  let fixture: ComponentFixture<SendFeedbackPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SendFeedbackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
