import { Injectable } from '@angular/core';

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
}
