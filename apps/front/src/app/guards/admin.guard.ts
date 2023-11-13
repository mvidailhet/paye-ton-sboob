import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const stateUrl = state.url;
  const userRole = authService.getUserRole();

  console.log(state);

  console.log(route);

  console.log(userRole);

  if (stateUrl?.includes('admin')) {
    if (userRole !== 'admin') {
      router.navigate(['/home']);
      return false;
    }
  }
  return true;
};
