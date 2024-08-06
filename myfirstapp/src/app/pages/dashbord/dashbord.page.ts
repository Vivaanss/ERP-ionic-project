import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

interface DropdownStates {
  [key: string]: boolean;
}
@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.page.html',
  styleUrls: ['./dashbord.page.scss'],
})
export class DashbordPage implements OnInit {
  dropdowns: DropdownStates = {
    users: false,
    masters: false,
    farmerDemand: false,
    reports: false,
    broadcastMessage: false,
  };
constructor(private menuController: MenuController) {}

ngOnInit() {

}

async openMenu() {
  await this.menuController.open('main-menu');
}

async closeMenu() {
  await this.menuController.close('main-menu');
}

toggleMenu() {
  this.menuController.isOpen('main-menu').then(isOpen => {
    if (isOpen) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  });
}


}
