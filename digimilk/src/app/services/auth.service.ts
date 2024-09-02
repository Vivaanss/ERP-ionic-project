import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://your-api-url.com'; // Replace with your API URL

  private users = [{ username: 'user', password: 'pass' }]; // Example data

  constructor(private http: HttpClient) {}
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

 // Register method
 register(username: string, email: string, password: string): Observable<any> {
  const body = { username, email, password };
  return this.http.post<any>(`${this.apiUrl}/register`, body).pipe(
    tap(response => {
      // Handle successful registration if needed
    }),
    catchError(this.handleError<any>('register'))
  );
}

// Reset password method
resetPassword(email: string): Observable<any> {
  return this.http.post<any>(`${this.apiUrl}/reset-password`, { email }).pipe(
    tap(response => {
      // Handle successful password reset if needed
    }),
    catchError(this.handleError<any>('resetPassword'))
  );
}

// Handle errors
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(`${operation} failed: ${error.message}`);
    return of(result as T);
  };
}
}
