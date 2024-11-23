import { Component, Input, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MenuService, MenuItem } from '../../services/menu.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  @Input() menuItems: MenuItem[] = [];
  public filteredMenuItems: MenuItem[] = [];

  public searchQuery: string = '';
  public showMenuBar = true;
  public isLoginPage = false;
  public role: string | null = null;

  constructor(private router: Router, public menuService: MenuService, private authService: AuthService) {
    // Watch for route changes to hide/show the menu bar
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.isLoginPage = ['/login', '/forgot-pwd', '/register'].includes(this.router.url);
        this.showMenuBar = !this.isLoginPage;
      }
    });
  }

  ngOnInit(): void {
  // Get the current user role from AuthService
  this.role = this.authService.getUserRole();

  // Subscribe to role changes to update menu items
  this.menuService.role$.subscribe(role => {
    this.menuItems = this.menuService.getMenu(role); // Get menu items based on the current role
    this.filteredMenuItems = this.menuItems; // Initialize filteredMenuItems
  });

  // Optionally, you can initialize the menu items immediately
  if (this.role) {
    this.menuItems = this.menuService.getMenu(this.role);
    this.filteredMenuItems = this.menuItems; // Initialize filteredMenuItems
  }

  console.log('Current role:', this.role);
  console.log('Menu Items:', this.menuItems);
}


  closeMenu() {
    const menu = document.querySelector('ion-menu');
    if (menu) {
      menu.close();
    }
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  isActiveRoute(route: string): boolean {
    return this.router.url === route;
  }

  // Add a method to toggle the dropdown state
  toggleDropdown(key: string | undefined) {
    if (key && this.menuService.dropdowns.hasOwnProperty(key)) {
      this.menuService.toggleDropdown(key);
    }
  }

  // Optimized search method
  performSearch() {
    const query = this.searchQuery.toLowerCase();
    this.filteredMenuItems = this.menuItems.filter(item => {
      if (item.label.toLowerCase().includes(query)) {
        return true;
      }
      // Check if the dropdown contains matching items
      if (item.isDropdown && item.key) {
        return this.menuService.dropdownItems[item.key]?.some(subItem => subItem.label.toLowerCase().includes(query));
      }
      return false;
    });
  }
}
