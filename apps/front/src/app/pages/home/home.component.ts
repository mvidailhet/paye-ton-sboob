import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, Role } from 'src/app/services/auth.service';

export interface Link {
  name: string;
  link: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  links: Link[];

  constructor(private authService: AuthService, private router: Router) {
    const userRole = this.authService.getUserRole();
    this.links = this.getLinksFromUserRole(userRole);
  }

  getLinksFromUserRole(userRole: Role): Link[] {
    switch (userRole) {
      case 'admin':
        return [
          {
            name: 'Promotions',
            link: '/promotions',
          },
          {
            name: 'Edtudiants',
            link: '/etudiants',
          },
        ];
      default:
        return [
          {
            name: 'Profil',
            link: '/student/profile',
          },
          {
            name: 'Dossier',
            link: '/student/dossier',
          },
          {
            name: 'Scolarité',
            link: '/student/scolarite',
          },
          {
            name: 'Mes cours',
            link: '/student/mescours',
          },
        ]
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
