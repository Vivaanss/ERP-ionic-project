import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public showMenuBar = true;  // Menu visibility flag
  public isLoginPage = false; // Flag to check if it's the login page
  public dropdowns: { [key: string]: boolean } = {
    users: false,
    reports: false,
    masters: false,
    farmerDemand: false,
    broadcastMessage: false
  }

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showMenuBar = !event.url.includes('/login');
        // Check if the current route is the login page
        this.isLoginPage = this.router.url === '/login';
        // Show or hide the menu based on the route
        this.showMenuBar = !this.isLoginPage;
      }
    });
};

  closeMenu() {
    const menu = document.querySelector('ion-menu');
    if (menu) {
      menu.close();
    }
  }

  toggleDropdown(dropdown: string) {
    if (this.dropdowns.hasOwnProperty(dropdown)) {
      this.dropdowns[dropdown] = !this.dropdowns[dropdown];
    }
  }
  
}
