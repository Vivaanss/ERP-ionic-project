import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-roles-permissions',
  templateUrl: './roles-permissions.page.html',
  styleUrls: ['./roles-permissions.page.scss'],
})
export class RolesPermissionsPage {
  roles = [
    { id: 1, role: 'Admin', status: 'Active' },
    { id: 2, role: 'User', status: 'Inactive' },
    // Add more roles as needed
  ];

  searchQuery = '';
  entriesToShow = 10;
  currentPage = 1;
  totalPages = 1;

  constructor(private router: Router) {
    this.calculateTotalPages();
  }

  get filteredRoles() {
    return this.roles.filter(role =>
      role.role.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  get paginatedRoles() {
    const startIndex = (this.currentPage - 1) * this.entriesToShow;
    return this.filteredRoles.slice(startIndex, startIndex + this.entriesToShow);
  }

  calculateTotalPages() {
    this.totalPages = Math.ceil(this.filteredRoles.length / this.entriesToShow);
  }

  onEntriesChange(event: any) {
    this.currentPage = 1;
    this.calculateTotalPages();
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  navigateToForm(roleId: number) {
    this.router.navigate(['/roles-permissions/form', roleId]);
  }
}
