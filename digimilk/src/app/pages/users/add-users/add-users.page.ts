import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  userForm: FormGroup;
  roles = ['Admin', 'User', 'Manager']; // Example roles, replace with your data

  constructor(private fb: FormBuilder, private modalCtrl: ModalController) {
    this.userForm = this.fb.group({
      userName: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
      userId: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      password: ['', Validators.required],
      role: ['', Validators.required],
      status: [true]
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.userForm.valid) {
      // Handle form submission
      console.log(this.userForm.value);
      this.modalCtrl.dismiss(this.userForm.value);
    }
  }

  onCancel() {
    this.modalCtrl.dismiss();
  }
}
