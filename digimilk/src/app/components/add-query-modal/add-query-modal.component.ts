import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-query-modal',
  templateUrl: './add-query-modal.component.html',
  styleUrls: ['./add-query-modal.component.scss'],
})
export class AddQueryModalComponent implements OnInit {
  [x: string]: any;
  addQueryForm!: FormGroup;

  farmersList = ['John Doe', 'Jane Smith', 'Michael Johnson'];

  constructor(private modalCtrl: ModalController, private fb: FormBuilder) {
  }
  
  ngOnInit() {

    this.addQueryForm = this.fb.group({
    farmerName: ['', Validators.required], // Updated form control name
    farmerMobileNo: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      query: ['', Validators.required],
      createdAt: [this['queries']?.createdAt || new Date(), Validators.required],
    });
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  onSubmit() {
    if (this.addQueryForm.valid) {
      this.modalCtrl.dismiss(this.addQueryForm.value);
    }
  }
}