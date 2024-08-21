import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-milk-type-modal',
  templateUrl: './add-milk-type-modal.component.html',
  styleUrls: ['./add-milk-type-modal.component.scss'],
})
export class AddMilkTypeModalComponent {
  addMilkTypeForm: FormGroup;
  milkTypes= ["Cow Milk","Buffalo Milk"]

  constructor(
    private modalCtrl: ModalController,
    private fb: FormBuilder
  ) {
    this.addMilkTypeForm = this.fb.group({
      name: ['', Validators.required],
      status: ['Active', Validators.required],
      createdAt: [new Date(), Validators.required], // Ensure this is set
    });
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  onSubmit() {
    if (this.addMilkTypeForm.valid) {
      this.modalCtrl.dismiss(this.addMilkTypeForm.value);
    }
  }
}
