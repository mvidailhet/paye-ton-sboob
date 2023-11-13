import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  passwordMinLength = 8;
  loginError = false;

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  onSubmit() {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.invalid) return;

    if (!this.loginForm.value.email || !this.loginForm.value.password) return;

    const isLoginOK = this.authService.login(
      this.loginForm.value.email,
      this.loginForm.value.password
    );

    if (!isLoginOK) {
      this.loginError = true;
      return;
    }

    this.router.navigate(['/home']);
  }

  get email() {
    return this.loginForm.get('email') as FormControl;
  }

  get password() {
    return this.loginForm.get('password') as FormControl;
  }
}
