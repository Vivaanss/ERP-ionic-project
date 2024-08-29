import { Component, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TitleService } from '../../services/title.service'; // Adjust path as needed
import { DarkModeService } from '../../services/dark-mode';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent {
  searchQuery: string = '';
  notifications: number = 5; // Example value
  isUserMenuOpen: boolean = false;
  Title: string = 'Dashboard';
  isDarkMode: boolean = false;
  isSmallScreen: boolean = false;
  isSearchActive: boolean = false;
  searchResults: Array<{ name: string, route: string }> = [];

  items: Array<{ name: string, route: string }> = [
    { name: 'My Account', route: '/profile' },
    { name: 'Settings', route: '/settings' },
    { name: 'Help', route: '/help' },
    { name: 'Logout', route: '/logout' },
    // Add more items as needed
  ];

  constructor(private router: Router, private titleService: TitleService, public darkModeService: DarkModeService, private platform: Platform) { }

  ngOnInit() {
    this.subscribeToTitleChanges();
    this.handleScreenResize();
    this.subscribeToDarkModeChanges();
  }

  subscribeToTitleChanges() {
    this.titleService.title$.subscribe(title => {
      this.Title = title;
    });

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const title = this.getTitleFromRoute(event.urlAfterRedirects);
        if (title) {
          this.titleService.setTitle(title);
        }
      }
    });
  }

  getTitleFromRoute(url: string): string {
    const titles: { [key: string]: string } = {
      '/dashboard': 'Dashboard',
      '/roles-permissions': 'Roles & Permissions',
      '/user': 'User',
      '/milk-types': 'Milk Type',
      '/masters/pro-type': 'Product Type',
      '/product': 'Product',
      '/masters/shift': 'Shift',
      '/masters/rate-chart': 'Rate Chart',
      '/masters/farmer-loan-detail': 'Farmer Loan Details',
      '/masters/farmer-rd-details': 'Farmer RD Details',
      '/masters/route-master': 'Route Master',
      '/masters/set-min-snf-fat': 'Set MIN SNF-FAT',
      '/masters/settle-pay': 'Settle Payment',
      '/masters/manage-week': 'Manage Week',
      '/milk-collection': 'Milk Collection',
      '/queries': 'Queries',
      '/society-milk-collection': 'Society Milk Collection',
      '/farmer-demand/pro-demand': 'Product Demand',
      '/farmer-demand/dr-demand': 'Dr. Demand',
      '/payments': 'Payments',
      '/products': 'Products',
      '/society-sales': 'Society Sales',
      '/reports/union': 'Union',
      '/reports/supervisor-master': 'Supervisor Master',
      '/reports/society-samiti': 'Society-Samiti',
      '/reports/demands': 'Demands',
      '/reports/society-sales': 'Society Sales',
      '/reports/society-milk-coll': 'Society Milk Collection',
      '/reports/queries': 'Queries',
      '/reports/qual-quan-check': 'Qual-Quan Check',
      '/reports/products': 'Products',
      '/reports/payments': 'Payments',
      '/reports/milk-coll': 'Milk Collection',
      '/reports/farmers': 'Farmers',
      '/society-demands': 'Society Demands',
      '/broadcast-message/screen-msg': 'Screen Message',
      '/broadcast-message/farmer-screen-msg': 'Farmer Screen Message',
      '/settings': 'Settings',
      // Add more routes as needed
    };
    return titles[url] || 'DigiMilk'; // Default title
  }

  handleScreenResize() {
    this.checkScreenSize();
    this.platform.resize.subscribe(() => {
      this.checkScreenSize();
    });
  }

  checkScreenSize() {
    this.isSmallScreen = this.platform.width() < 768; // Adjust the width as needed
  }

  toggleSearchBar() {
    this.isSearchActive = !this.isSearchActive;
  }

  performSearch() {
    if (this.searchQuery.trim()) {
      this.searchResults = this.items.filter(item =>
        item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.searchResults = [];
    }

    // For small screens, do not minimize the search bar after each keystroke.
    // If you want to minimize after a search button is clicked, do it separately.
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
    this.clearSearch();
  }

  clearSearch() {
    this.searchResults = [];
    this.searchQuery = '';
    this.isSearchActive = false;
  }

  toggleUserMenu() {
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }

  closeUserMenu() {
    this.isUserMenuOpen = false;
  }

  clearNotifications() {
    this.notifications = 0;
  }

  subscribeToDarkModeChanges() {
    this.darkModeService.darkMode$.subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
      document.body.classList.toggle('dark-mode', isDarkMode);
    });
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
