import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


export interface MenuItem {
  label: string;
  icon: string;
  route?: string;
  isDropdown?: boolean;
  key?: string; // Unique key for dropdowns
  roles?: string[]; // Optional: roles allowed to see this menu item
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private roleSubject = new BehaviorSubject<string>('default-role'); // Default role if none is found
  public role$ = this.roleSubject.asObservable();
  public searchQuery: string = '';



  // Get menu based on the role
   // Method to change the role
   setRole(role: string) {
    localStorage.setItem('role', role);
    this.roleSubject.next(role); // Emit the new role
  }
  
  getRole(): string {
    return localStorage.getItem('role') || 'default-role'; // Default role if none is found
  }
  
  getMenu(role: string): MenuItem[] {
    return this.getMenuByRole(role);
  }
  
  private getMenuByRole(role: string): MenuItem[] {
    if (role === 'admin') {
      return this.adminMenu;
    } else if (role === 'user') {
      return this.userMenu;
    } else if (role === 'production') {
      return this.productMenu;
    } else {
      return []; // Return an empty array for unknown roles
    }
  }
  
  // Dropdown management
  public dropdowns: Record<string, boolean> = {
    masters: false,
    farmerDemand: false,
    reports: false,
    broadcastMessage: false
  };

  // Dropdown icon mappings
  public dropdownIcons: Record<string, string> = {
    masters: 'list',
    farmerDemand: 'leaf',
    reports: 'document',
    broadcastMessage: 'chatbox-ellipses'
  };

  // Dropdown label mappings
  public dropdownLabels: Record<string, string> = {
    masters: 'Masters',
    farmerDemand: 'Farmer Demand',
    reports: 'Reports',
    broadcastMessage: 'Broadcast Message'
  };
// production menu
  private userMenu: MenuItem[] = [
    { label: 'dashboard', route: '/prod-dashboard', icon: 'home' },
    { label: 'Order', route: '/create-order', icon: 'apps' },
    { label: 'Work Order', route: '/work-order', icon: 'pie-chart' },
    { label: 'BOM', route: '/bom', icon: 'briefcase' },
    { label: 'Reports', route: '/reports', icon: 'briefcase' },
  ];

// production menu
  private productMenu: MenuItem[] = [
    { label: 'dashboard', route: '/prod-dashboard', icon: 'home' },
    { label: 'Create Order', route: '/create-order', icon: 'apps' },
    { label: 'Work Order', route: '/work-orders', icon: 'pie-chart' },
    { label: 'BOM', route: '/bom', icon: 'briefcase' },
    { label: 'Reports', route: '/reports', icon: 'briefcase' },
  ];
  // Admin and User menu definitions

  private adminMenu: MenuItem[] = [
    { label: 'Dashboard', route: '/dashboard', icon: 'home' },
    { label: 'Roles & Permissions', route: '/roles-permissions', icon: 'apps' },
    { label: 'User', route: '/user', icon: 'pie-chart' },
    { label: 'Masters', icon: 'list', isDropdown: true, key: 'masters' },
    { label: 'Milk Collection', route: '/milk-collection', icon: 'briefcase' },
    { label: 'Society Milk Collection', route: '/society-milk-collection', icon: 'briefcase' },
    { label: 'Farmer Demand', icon: 'leaf', isDropdown: true, key: 'farmerDemand' },
    { label: 'Queries', route: '/queries', icon: 'chatbubbles' },
    { label: 'Payments', route: '/payments', icon: 'wallet' },
    { label: 'Product', route: '/products', icon: 'bag-handle' },
    { label: 'Society Sales', route: '/society-sales', icon: 'ribbon' },
    { label: 'Reports', icon: 'document', isDropdown: true, key: 'reports' },
    { label: 'Society Demands', route: '/society-demands', icon: 'cart' },
    { label: 'Broadcast Message', icon: 'chatbox-ellipses', isDropdown: true, key: 'broadcastMessage' },
    { label: 'Settings', route: '/settings', icon: 'settings' }
  ];

  // Dropdown menu items
  public dropdownItems: Record<string, MenuItem[]> = {
    masters: [
      {label: 'Milk Types', route: '/milk-types',icon: ''},
      {label: 'Product Type', route: '/masters/pro-type',icon: ''},
      {label: 'Product', route: '/product',icon: ''},
      {label: 'Shift', route: '/masters/shift', icon: '' },
      {label: 'Rate-Chart', route: '/masters/rate-chart',icon: ''},
      {label: 'Farmer Loan Details', route: '/masters/farmer-loan-detail',icon: ''},
      {label: 'Farmer RD Details', route: '/masters/farmer-rd-details',icon: ''},
      {label: 'Router Master', route: '/masters/route-master',icon: ''},
      {label: 'Set Min SNF FAT', route: '/masters/set-min-snf-fat',icon: ''},
      {label: 'Settle Payments', route: '/masters/settle-pay',icon: ''},
      {label: 'Manage Week', route: '/masters/manage-week',icon: ''}

      // Add more dropdown items as needed
    ],
    farmerDemand: [
      {label: 'Product Demand', route: '/farmer-demand/pro-demand',icon: ''},
      {label: 'Doctors Demand', route: '/farmer-demand/dr-demand',icon: ''}
    ],
    reports: [
      {label: 'Union', route: '/reports/union',icon: ''},
      {label: 'Supervisor Master', route: '/reports/supervisor-master',icon: ''},
      {label: 'Society(Samiti)', route: '/reports/society-samiti',icon: ''},
      {label: 'Farmers', route: '/reports/farmers',icon: ''},
      {label: 'Milk Collection', route: '/reports/milk-coll',icon: ''},
      {label: 'Queries', route: '/reports/queries', icon: '' },
      {label: 'Demands', route: '/reports/demands',icon: ''},
      {label: 'Payments', route: '/reports/payments',icon: ''},
      {label: 'Products', route: '/reports/products',icon: ''},
      {label: 'Society Milk Collection', route: '/reports/society-milk-coll',icon: ''},
      {label: 'Qual/Quan Check', route: '/reports/qual-quan-check',icon: ''},
      {label: 'Society Sales', route: '/reports/society-sales',icon: ''}
      // Add more report items as needed
    ],
    broadcastMessage: [
      {label: 'Screen Message', route: '/broadcast-message/screen-msg',icon: ''},
      {label: 'Farmer Screen Message', route: '/broadcast-message/farmer-screen-msg',icon: ''}
    ]
  };



  toggleDropdown(dropdown: string) {
    if (this.dropdowns.hasOwnProperty(dropdown)) {
      this.dropdowns[dropdown] = !this.dropdowns[dropdown];
    }
  }
}
