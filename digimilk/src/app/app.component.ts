import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  dropdowns: { [key: string]: boolean } = {
    users: false,
    reports: false,
    masters: false,
    farmerDemand: false,
    broadcastMessage: false
  };

  constructor(private menu: MenuController) {}

  toggleDropdown(key: string) {
    this.dropdowns[key] = !this.dropdowns[key];
  }

  closeMenu() {
    this.menu.close('main-menu');
  }
}
