import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-society-milk-collection-modal',
  templateUrl: './add-society-milk-collection-modal.component.html',
  styleUrls: ['./add-society-milk-collection-modal.component.scss'],
})
export class AddSocietyMilkCollectionModalComponent {
  addSocietyMilkCollectionForm: FormGroup;
  societyNames = ['Society A', 'Society B']; // Replace with actual options
  milkTypes = ['Cow Milk', 'Buffalo Milk']; // Replace with actual options
  milkCategories = ['Category 1', 'Category 2']; // Replace with actual options
  shifts = ['Morning', 'Evening']; // Replace with actual options

  constructor(
    private modalCtrl: ModalController,
    private fb: FormBuilder
  ) {
    this.addSocietyMilkCollectionForm = this.fb.group({
      societyName: ['', Validators.required],
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

  dismiss() {
    this.modalCtrl.dismiss();
  }
  onSubmit() {
    if (this.addSocietyMilkCollectionForm.valid) {
      // Ensure createdAt is included in the submitted data
      this.modalCtrl.dismiss({
        ...this.addSocietyMilkCollectionForm.value,
        createdAt: new Date() // Ensure createdAt is set
      });
    }
  }
  }