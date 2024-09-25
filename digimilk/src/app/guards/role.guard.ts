// role.guard.ts
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data['expectedRole'];
    const userRole = this.authService.getUserRole();  // Assuming your AuthService has this method

    if (userRole !== expectedRole) {
      // If the user's role does not match the expected role, redirect to login or unauthorized page
      this.router.navigate(['/unauthorized']);
      return false;
    }
    return true;
  }
} 