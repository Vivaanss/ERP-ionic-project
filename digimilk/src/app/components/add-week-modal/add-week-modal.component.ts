import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-week-modal',
  templateUrl: './add-week-modal.component.html',
  styleUrls: ['./add-week-modal.component.scss'],
})
export class AddWeekModalComponent {
  @Input() week: any;
  
  name!: string;
  startDate!: string;
  endDate!: string;
  status!: string;

  constructor(private modalController: ModalController) {}

  ngOnInit() {
    if (this.week) {
      this.name = this.week.name;
      this.startDate = this.week.startDate;
      this.endDate = this.week.endDate;
      this.status = this.week.status;
    }
  }

  dismiss(data?: any) {
    this.modalController.dismiss(data);
  }

  submit() {
    this.dismiss({
      name: this.name,
      startDate: this.startDate,
      endDate: this.endDate,
      status: this.status,
      createdAt: new Date()
    });
  }
}
