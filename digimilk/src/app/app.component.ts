import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router, NavigationEnd } from '@angular/router';


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

  showMenuBar = true;



  constructor(private menu: MenuController, private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showMenuBar = !event.url.includes('/login');
      }
    });
  
  }

  toggleDropdown(key: string) {
    this.dropdowns[key] = !this.dropdowns[key];
  }

  closeMenu() {
    this.menu.close('main-menu');
  }
}
