import { Component, Input } from '@angular/core';
import { IonPopover, ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-week-modal',
  templateUrl: './add-week-modal.component.html',
  styleUrls: ['./add-week-modal.component.scss'],
})
export class AddWeekModalComponent {
  @Input() week: any;
  weekForm!: FormGroup;

  constructor(private modalController: ModalController, private fb: FormBuilder) {
    this.weekForm = this.fb.group({
      name: [''],
      startDate: [''],
      endDate: [''],
      status: ['']
    });
  }

  ngOnInit() {
    if (this.week) {
      this.weekForm.patchValue({
      name : this.week.name,
      startDate :this.week.startDate,
      endDate : this.week.endDate,
      status : this.week.status
    });
    }
  }

  onDateChange(field: string, event: any, popover: IonPopover) {
    const value = event.detail.value;
    this.weekForm.get(field)?.setValue(value);

    // Automatically close the popover after selecting the date
    popover.dismiss();
  }
  openPopover(popover: IonPopover) {
    popover.present();
  }


  dismiss(data?: any) {
    this.modalController.dismiss(data);
  }

  submit() {
    this.dismiss({
      ...this.weekForm.value,
      createdAt: new Date()
    });
  }
}
