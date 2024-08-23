import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-payment-modal',
  templateUrl: './add-payment-modal.component.html',
  styleUrls: ['./add-payment-modal.component.scss'],
})
export class AddPaymentModalComponent implements OnInit {
  @Input() payment: any;
  paymentForm!: FormGroup;
  isEditMode: boolean = false;

  farmers = ['John Doe', 'Jane Smith', 'Mike Johnson'];
  societies = ['Society A', 'Society B', 'Society C'];
  paymentMethods = ['Cash', 'Bank Transfer', 'Cheque'];
  statuses = ['Pending', 'Completed'];

  constructor(
    private modalController: ModalController,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.isEditMode = !!this.payment;

    this.paymentForm = this.formBuilder.group({
      farmerName: [this.payment?.farmerName || '', Validators.required],
      societyName: [this.payment?.societyName || '', Validators.required],
      paymentMethod: [this.payment?.paymentMethod || '', Validators.required],
      status: [this.payment?.status || '', Validators.required],
      paymentAmount: [this.payment?.paymentAmount || '', Validators.required],
      paymentDate: [this.payment?.paymentDate || '', Validators.required],
      transactionId: [this.payment?.transactionId || ''],
      description: [this.payment?.description || ''],
      adjustment: [this.payment?.adjustment || '']
    });
  }

  async submitForm() {
    if (this.paymentForm.valid) {
      await this.modalController.dismiss(this.paymentForm.value);
    }
  }

  async dismissModal() {
    await this.modalController.dismiss();
  }
}
