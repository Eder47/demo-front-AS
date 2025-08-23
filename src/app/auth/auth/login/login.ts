import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../auth';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'; // 👈 importar aquí
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true, 
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    console.log(this.form.value);
  }
}
