import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-shift-modal',
  templateUrl: './add-shift-modal.component.html',
  styleUrls: ['./add-shift-modal.component.scss'],
})
export class AddShiftModalComponent {
  @Input() shift: any;
  isEdit:boolean=false;

  addShiftForm: FormGroup = this.fb.group({
    name: ['Morning Shift', Validators.required],
    status: ["Active", Validators.required], // Default value for status
    createdAt: [new Date(), Validators.required], // Ensure this is set

  });

  constructor(
    private modalCtrl: ModalController,
    private fb: FormBuilder
  ) {}
  ngOnInit() {
    this.isEdit = !!this.shift;
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  onSubmit() {
    if (this.addShiftForm.valid) {
      this.modalCtrl.dismiss(this.addShiftForm.value); // Dismiss with the form data
    } else {
      console.log("Form is invalid");
    }
  }
}
