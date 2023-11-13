import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const routePath = route.routeConfig?.path;
  const isUserLogged = authService.isLogged();

  if (routePath === 'login') {
    if (isUserLogged) {
      router.navigate(['/home']);
      return false;
    }
  } else {
    if (!isUserLogged) {
      router.navigate(['/login']);
      return false;
    }
  }

  return true;
};
