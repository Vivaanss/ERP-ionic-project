import { Component } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {
  menuItems = [
    { title: 'Order List', url: '/production/order-list' },
    { title: 'Create Order', url: '/production/create-order' },
    { title: 'BOM Management', url: '/production/bom-management' },
    { title: 'Work Orders', url: '/production/work-orders' },
    { title: 'Materials', url: '/production/materials' }
  ];
}
