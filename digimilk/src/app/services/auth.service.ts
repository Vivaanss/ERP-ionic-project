import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private jwtHelper = new JwtHelperService();
  private authToken: string | null = null;
  private userRole: string | null = null;

  user$: Observable<firebase.User | null>;  // Observable for Firebase user state
  private apiUrl = 'https://your-api-url.com'; // Replace with your API URL

  constructor(
    private http: HttpClient,
    private afAuth: AngularFireAuth,
    private router: Router
  ) {
    // Initialize user observable
    this.user$ = this.afAuth.authState as Observable<firebase.User | null>;
  }

  // Function to log in using username and password
  login(username: string, password: string, credentials: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials).pipe(
      tap((response) => {
        this.authToken = response.token;
        this.userRole = response.role;
        localStorage.setItem('authToken', this.authToken!);
        this.router.navigate(['/dashboard']);
      }),
      catchError(this.handleError<any>('login'))
    );
  }

  // Google login method using popup with force prompt for account selection
  async signInWithGoogle(): Promise<void> {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });

    try {
      const result = await this.afAuth.signInWithPopup(provider);
      if (result.user) {
        this.router.navigate(['/dashboard']);  // Ensure '/dashboard' is a valid route in your app
      }
    } catch (error) {
      console.error('Error during Google Sign-In:', error);
    }
  }

  // Facebook login method
  async signInWithFacebook(): Promise<void> {
    const provider = new firebase.auth.FacebookAuthProvider();
    provider.setCustomParameters({ auth_type: 'reauthenticate' });

    try {
      console.log('Attempting to sign in with Facebook...');
      const result = await this.afAuth.signInWithPopup(provider);
      console.log('Facebook login successful:', result.user);
      this.router.navigate(['/dashboard']);
    } catch (error: any) {
      console.error('Error during Facebook login:', error);

      if (error.code === 'auth/account-exists-with-different-credential') {
        console.log('Handling account-exists-with-different-credential error...');

        const pendingCred = error.credential;  // Facebook credential user attempted to use
        const email = error.email;  // Email associated with the account

        try {
          const signInMethods = await this.afAuth.fetchSignInMethodsForEmail(email);
          console.log('Sign-in methods for email:', signInMethods);

          if (signInMethods.includes(firebase.auth.GoogleAuthProvider.PROVIDER_ID)) {
            console.log('Email linked to Google, attempting Google sign-in...');
            const googleProvider = new firebase.auth.GoogleAuthProvider();
            const googleResult = await this.afAuth.signInWithPopup(googleProvider);
            console.log('Google sign-in successful:', googleResult.user);

            if (googleResult.user) {
              await googleResult.user.linkWithCredential(pendingCred);
              console.log('Facebook account has been linked to Google account.');
              alert('Facebook account has been linked to your Google account.');
              this.router.navigate(['/dashboard']);
            }
          } else if (signInMethods.includes(firebase.auth.EmailAuthProvider.PROVIDER_ID)) {
            alert('An account with this email already exists. Please sign in with your email and password.');
          } else {
            console.error('Unknown sign-in method associated with this email.');
          }
        } catch (linkingError) {
          console.error('Error linking accounts:', linkingError);
          alert('There was an error linking your accounts. Please try again.');
        }
      } else {
        console.error('General error during login:', error);
        alert(`Error signing in: ${error.message}`);
      }
    }
  }

  // Register logic
  register(username: string, email: string, password: string): Observable<any> {
    const body = { username, email, password };
    return this.http.post<any>(`${this.apiUrl}/register`, body).pipe(
      tap(response => {
        console.log('Registration successful:', response);
        this.router.navigate(['/login']);
      }),
      catchError(this.handleError<any>('register'))
    );
  }

  // Reset password logic
  resetPassword(email: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/reset-password`, { email }).pipe(
      tap(response => {
        console.log('Password reset email sent successfully:', response);
        alert('Password reset link has been sent to your email.');
      }),
      catchError(this.handleError<any>('resetPassword'))
    );
  }

  // Logout
  logout() {
    this.authToken = null;
    this.userRole = null;
    localStorage.removeItem('authToken');
    this.router.navigate(['/login']);
  }

  // Check authentication status
  isAuthenticated(): boolean {
    const token = localStorage.getItem('authToken');
    return token ? !this.jwtHelper.isTokenExpired(token) : false;
  }

  // Get role from JWT
  getRole(): string | null {
    if (!this.userRole) {
      const token = localStorage.getItem('authToken');
      if (token) {
        const decodedToken = this.jwtHelper.decodeToken(token);
        this.userRole = decodedToken.role;
      }
    }
    return this.userRole;
  }

  // Remember user (optional)
  rememberUser(username: string) {
    localStorage.setItem('rememberedUser', username);
  }

  // Error handler
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      alert(`${operation} failed. Please try again later.`);
      return of(result as T);
    };
  }

  // Get Firebase user state (optional)
  getUser() {
    return this.afAuth.authState;
  }
}
