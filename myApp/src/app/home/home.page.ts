import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  onButtonClick() {
    window.location.href = 'https://www.linkedin.com/in/isha-dhumal-a166b5220/';
  }
}

