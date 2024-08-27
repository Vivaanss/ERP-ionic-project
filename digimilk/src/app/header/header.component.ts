import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  searchQuery: string = '';
  isUserMenuOpen: boolean = false;
  notifications: number = 5;

  constructor(private router: Router) {}

  toggleUserMenu() {
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }

  closeUserMenu() {
    this.isUserMenuOpen = false;
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
    this.closeUserMenu();
  }

  logout() {
    // Implement logout logic
    console.log('User logged out');
  }

  performSearch() {
    // Implement search logic
    console.log('Search query:', this.searchQuery);
  }
}
