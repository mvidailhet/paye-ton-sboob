import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.scss']
})
export class PromotionsComponent {
  loginForm = this.fb.group({
    email: [''],
    password: [''],
  });

  constructor(
    private fb: FormBuilder,
  ) {}
}
