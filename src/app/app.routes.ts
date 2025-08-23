import { Routes } from '@angular/router';
import { Login } from './auth/auth/login/login';
import { Turnos } from './turnos/turnos/turnos';

export const routes: Routes = [
  { path: '', component: Login },
  { path: 'turnos', component: Turnos }
];
