import { Injectable } from '@angular/core';

export type Role = 'student' | 'teacher' | 'admin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  roles = ['student', 'teacher', 'admin'];

  users = [
    {
      email: 'student@gmail.com',
      role: 'student',
    },
    {
      email: 'teacher@gmail.com',
      role: 'teacher',
    },
    {
      email: 'admin@gmail.com',
      role: 'admin',
    },
  ]

  login(email: string, _password: string): boolean {
    const user = this.users.find(user => user.email === email);
    if (!user) return false;
    localStorage.setItem('user', JSON.stringify(user));
    return true;
  }

  logout(): void {
    localStorage.removeItem('user');
  }

  isLogged(): boolean {
    const user = localStorage.getItem('user');
    return user !== null;
  }

  getUserRole(): Role {
    const userStr = localStorage.getItem('user');
    if (!userStr) {
      throw new Error('User not found');
    }
    const user = JSON.parse(userStr);
    return user.role;
  }
}
