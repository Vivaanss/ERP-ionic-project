// src/app/dark-mode.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  private darkModeSubject = new BehaviorSubject<boolean>(false);
  darkMode$ = this.darkModeSubject.asObservable();

  constructor() {
    // Optionally, retrieve the initial dark mode setting from localStorage or default
    const savedMode = localStorage.getItem('darkMode') === 'true';
    this.darkModeSubject.next(savedMode);
  }

  toggleDarkMode(): void {
    const currentMode = this.darkModeSubject.value;
    this.setDarkMode(!currentMode);
  }

  setDarkMode(isDarkMode: boolean): void {
    this.darkModeSubject.next(isDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }
}
