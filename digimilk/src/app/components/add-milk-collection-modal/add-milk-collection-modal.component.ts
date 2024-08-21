import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-milk-collection-modal',
  templateUrl: './add-milk-collection-modal.component.html',
  styleUrls: ['./add-milk-collection-modal.component.scss'],
})
export class AddMilkCollectionModalComponent {
  addMilkCollectionForm: FormGroup;
  farmerNames = ['Farmer A', 'Farmer B'];
  milkTypes = ['Cow Milk', 'Buffalo Milk'];
  milkCategories = ['Category 1', 'Category 2'];
  shifts = ['Morning', 'Evening'];

  constructor(
    private modalCtrl: ModalController,
    private fb: FormBuilder
  ) {
    this.addMilkCollectionForm = this.fb.group({
      farmerName: ['', Validators.required],
      milkType: ['', Validators.required],
      milkCategory: ['', Validators.required],
      shift: ['', Validators.required],
      snf: ['', Validators.required],
      fat: ['', Validators.required],
      ratePerLitre: ['', Validators.required],
      totalMilk: ['', Validators.required],
      totalAmount: ['', Validators.required],
      canId: [''],
      createdAt: [new Date(), Validators.required], // Ensure this is set

    });
  }

  onSubmit() {
    if (this.addMilkCollectionForm.valid) {
      console.log('Form Value:', this.addMilkCollectionForm.value);
      this.modalCtrl.dismiss(this.addMilkCollectionForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  cancel() {
    this.modalCtrl.dismiss();
  }

}
