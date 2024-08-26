import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product-modal',
  templateUrl: './add-product-modal.component.html',
  styleUrls: ['./add-product-modal.component.scss'],
})
export class AddProductModalComponent  implements OnInit {
  @Input() product: any;
  isEdit:boolean=false;

  addProductForm: FormGroup;

  constructor(
    private modalCtrl: ModalController,
    private fb: FormBuilder
  ) {
    this.addProductForm = this.fb.group({
      name: ['', Validators.required],
      productType: ['', Validators.required],
      price: [0, Validators.required],
      status: ['Available', Validators.required],
      createdAt: [new Date(), Validators.required], // Ensure this is set
    });
  }
  ngOnInit(): void{
      this.isEdit = !!this.product;
    
    throw new Error('Method not implemented.');
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  onSubmit() {
    if (this.addProductForm.valid) {
      this.modalCtrl.dismiss(this.addProductForm.value);
    }
  }
}
