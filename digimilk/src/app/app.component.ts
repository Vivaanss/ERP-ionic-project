import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public showMenuBar = true;  // Menu visibility flag
  public isLoginPage = false; // Flag to check if it's the login page
  public dropdowns: { [key: string]: boolean } = {
    users: false,
    masters: false,
    farmerDemand: false,
    reports: false,
    broadcastMessage: false
  }

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
<<<<<<< HEAD
        this.showMenuBar = !event.url.includes('/login');
=======
>>>>>>> dfc2d5c1a376e8de6a3446f5db3b4987600f0213
        // Check if the current route is the login page
        this.isLoginPage = this.router.url === '/login';
        // Show or hide the menu based on the route
        this.showMenuBar = !this.isLoginPage;
      }
    });
<<<<<<< HEAD
};
=======
  }
>>>>>>> dfc2d5c1a376e8de6a3446f5db3b4987600f0213

  closeMenu() {
    const menu = document.querySelector('ion-menu');
    if (menu) {
      menu.close();
    }
<<<<<<< HEAD
=======
  }

  toggleDropdown(dropdown: string) {
    if (this.dropdowns.hasOwnProperty(dropdown)) {
      this.dropdowns[dropdown] = !this.dropdowns[dropdown];
    }
>>>>>>> dfc2d5c1a376e8de6a3446f5db3b4987600f0213
  }

  toggleDropdown(dropdown: string) {
    if (this.dropdowns.hasOwnProperty(dropdown)) {
      this.dropdowns[dropdown] = !this.dropdowns[dropdown];
    }
  }
  
}
