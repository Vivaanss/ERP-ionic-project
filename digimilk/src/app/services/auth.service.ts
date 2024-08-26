import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users = [{ username: 'user', password: 'pass' }]; // Example data

  constructor() {}
// login
  login(username: string, password: string): Promise<{ success: boolean }> {
    return new Promise((resolve) => {
      const user = this.users.find(u => u.username === username && u.password === password);
      resolve({ success: !!user });
    });
  }
// for authentication
  rememberUser(username: string) {
    localStorage.setItem('rememberedUser', username);
  }

// for social links
async googleLogin(): Promise<void> {
  // Integrate with Google Auth API or Firebase
}

async facebookLogin(): Promise<void> {
  // Integrate with Facebook Auth API or Firebase
}

}
