import { Component } from '@angular/core';
import { NgForm, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LoadingController } from '@ionic/angular';
import { DarkModeService } from '../services/dark-mode';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FacebookAuthProvider, UserCredential } from 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';
  rememberMe: boolean = false;
  errorMessage: string = '';
  isLoading: boolean = false;
  isDarkMode: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private darkModeService: DarkModeService,
    private afAuth: AngularFireAuth
  ) {}

  ngOnInit(): void {
    this.darkModeService.darkMode$.subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
    });
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Logging in...',
      duration: 2000,
    });
    await loading.present();
  }

  login() {
    this.authService.login(this.username, this.password,this.rememberMe).subscribe({
      next: (res) => {
        console.log('API Response:', res);
        
        if (res && res.token && res['role']) {
          console.log('User role:', res['role']);
          
          // Store the token and role in localStorage
          localStorage.setItem('token', JSON.stringify(res.token));
          localStorage.setItem('role', res['role']); 
          
          // Navigate based on user role
          if (res['role'] === 'admin') {
            this.router.navigate(['/admin-dashboard']);
          } else if (res['role'] === 'user') {
            this.router.navigate(['/users-dashboard']);
          } else if (res['role'] === 'production') {
            this.router.navigate(['/prod-dashboard']);
          }else {
            this.router.navigate(['/unauthorized']);
            console.error('Unknown role');
          }
        }
      },
      error: (err) => {
        console.error('Login error:', err);
        this.errorMessage = 'Login failed. Please try again.';
      },
    });
  }

  googleSignIn() {
    this.authService.signInWithGoogle().then((userCredential) => {
      // Handle user credential
      this.router.navigate(['/dashboard']);
    }).catch((error) => {
      console.error('Google sign-in error:', error);
      this.errorMessage = 'Failed to sign in with Google.';
    });
  }

  async signInWithFacebook() {
    this.isLoading = true;
    try {
      const provider = new FacebookAuthProvider();
      const result = await this.afAuth.signInWithPopup(provider);
      const userCredential = result as unknown as UserCredential;  // Cast result to UserCredential
      this.router.navigate(['/dashboard']);
    } catch (error: any) {
      if (error.code === 'auth/popup-closed-by-user') {
        this.errorMessage = 'The popup was closed before authentication could complete.';
      } else {
        this.errorMessage = 'Failed to sign in with Facebook.';
      }
      console.error('Error signing in with Facebook:', error);
    } finally {
      this.isLoading = false;
    }
  }

  // Custom password validator function
  passwordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value || '';
      if (
        !/[A-Z]/.test(value) ||    // Check for uppercase letter
        !/[0-9]/.test(value) ||    // Check for number
        !/[\W_]/.test(value) ||    // Check for special character
        value.length < 8           // Check for minimum length
      ) {
        return { invalidPassword: true };
      }
      return null;
    };
  }

  get passwordControl() {
    return {
      value: this.password
    } as AbstractControl;
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      this.errorMessage = 'Please fill out the form correctly.';
      return;
    }
    this.login();
  }

  
}
