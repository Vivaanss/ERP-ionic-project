import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddUserModalComponent } from '../../components/add-user-modal/add-user-modal.component';

interface User {
  id: number;
  userName: string;
  emailId: string;
  userId: string;
  mobile: string;
  role: string;
  status: string;
  createdAt: Date;
}

@Component({
  selector: 'app-users',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  users: User[] = [
    { id: 1, userName: 'John Doe', emailId: 'john@example.com', userId: "john@example.com", mobile: '9876543210', role: 'Union', status: 'Active', createdAt: new Date() },
    { id: 2, userName: 'Jane Doe', emailId: 'jane@example.com', userId: "jane@example.com", mobile: '8765432109', role: 'Supervisor', status: 'Active', createdAt: new Date() },
    { id: 3, userName: 'Jane Doe', emailId: 'jane@example.com', userId: "jane@example.com", mobile: '8765432109', role: 'Society', status: 'Active', createdAt: new Date() },
    { id: 4, userName: 'Jane Doe', emailId: 'jane@example.com', userId: "jane@example.com", mobile: '8765432109', role: 'Farmer', status: 'Active', createdAt: new Date() },
    // Add more user objects here
  ];

  paginatedUsers: User[] = [];
  roles: string[] = ['Union', 'Supervisor', 'Society', 'Farmer']; // List of roles
  selectedRole: string = '';
  searchTerm = '';
  entriesToShow = 5;
  currentPage = 1;
  totalPages = 1;

  addUserForm: FormGroup;

  constructor(private modalController: ModalController, private alertController: AlertController, private fb: FormBuilder) {
    this.addUserForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      role: ['', Validators.required],
      status: [true, Validators.required],
    });
  }

  ngOnInit() {
    this.updatePagination();
  }

  get filteredUsers(): User[] {
    return this.users.filter(user =>
      (!this.selectedRole || user.role === this.selectedRole) &&  // Apply role filter
      (
        user.userName?.toLowerCase().includes(this.searchTerm?.toLowerCase() || '') ||
        user.emailId?.toLowerCase().includes(this.searchTerm?.toLowerCase()) ||
        user.mobile?.includes(this.searchTerm) ||
        user.status?.toLowerCase().includes(this.searchTerm?.toLowerCase())
      )
    );
  }

  updatePagination() {
    this.totalPages = Math.ceil(this.filteredUsers.length / this.entriesToShow);
    this.paginateUsers();
  }

  paginateUsers() {
    const startIndex = (this.currentPage - 1) * this.entriesToShow;
    const endIndex = startIndex + this.entriesToShow;
    this.paginatedUsers = this.filteredUsers.slice(startIndex, endIndex);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.paginateUsers();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.paginateUsers();
    }
  }

  async openAddUserModal(user?: User) {
    const modal = await this.modalController.create({
      component: AddUserModalComponent,
      componentProps: { user },
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data) {
      if (user) {
        const index = this.users.findIndex(item => item.id === user.id);
        if (index > -1) {
          this.users[index] = { ...this.users[index], ...data };
        }
      } else {
        this.users.push({
          id: this.users.length + 1,
          ...data,
        });
      }
      this.updatePagination();
    }
  }

  async editUser(user: User) {
    const modal = await this.modalController.create({
      component: AddUserModalComponent,
      componentProps: { user },
    });

    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data) {
      const index = this.users.findIndex(item => item.id === user.id);
      if (index > -1) {
        this.users[index] = { id: user.id, ...data };
        this.updatePagination();
      }
    }
  }

  async deleteUser(id: number) {
    const alert = await this.alertController.create({
      header: 'Confirm Delete',
      message: 'Are you sure you want to delete this user?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Delete',
          handler: () => {
            this.users = this.users.filter((item) => item.id !== id);
            this.updatePagination();
          },
        },
      ],
    });

    await alert.present();
  }

  filterByRole(event: any) {
    const role = event.detail.value;
    this.selectedRole = role;  // Save selected role
    this.updatePagination();
  }

  changePassword(user: any) {
    // Implement change password logic
  }

  updateUserDetails(user: any) {
    // Implement update user details logic
  }
}
