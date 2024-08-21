import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-route-modal',
  templateUrl: './add-route-modal.component.html',
  styleUrls: ['./add-route-modal.component.scss'],
})
export class AddRouteModalComponent {
  @Input() form: FormGroup;
  

  constructor(private modalCtrl: ModalController, private fb:FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      vehicleNo:['', Validators.required],
      driverNumber:['', [Validators.required,  Validators.pattern('^[0-9]{10}$')]],
      driverName:['', Validators.required],
      distance:['', Validators.required],
      duration:['', Validators.required],
      status: ['Active', Validators.required],
      createdAt: [new Date(), Validators.required], // Ensure this is set
    });
  }

  submit() {
    if (this.form.valid) {
      this.modalCtrl.dismiss(this.form.value);
    }
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
