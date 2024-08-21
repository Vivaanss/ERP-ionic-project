import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-settle-pay-modal',
  templateUrl: './add-settle-pay-modal.component.html',
  styleUrls: ['./add-settle-pay-modal.component.scss'],
})
export class AddSettlePayModalComponent implements OnInit {
  addSettlePayForm!: FormGroup;
  @Input() settlePay = {
    society: '',
    farmer: '',
    settlementAmount: null,
    settlementDate: null,
    adjust: ''
  };

  constructor(private fb: FormBuilder, private modalCtrl: ModalController) {}

  ngOnInit() {
    this.addSettlePayForm = this.fb.group({
      society: ['', Validators.required],
      farmer: ['', Validators.required],
      settlementAmount: [null, [Validators.required, Validators.min(0)]],
      settlementDate: ['', Validators.required],
      adjust: [''],
      description: ['',Validators.required],
      head: ['',Validators.required]
    });
  }

  onSubmit() {
    if (this.addSettlePayForm.valid) {
      this.modalCtrl.dismiss(this.addSettlePayForm.value);
    }
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
