import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Auth {
   constructor() { }

  // Método login simulado
  login(username: string, password: string): Observable<boolean> {
    console.log('Usuario:', username, 'Password:', password);
    return of(true); // siempre devuelve true por ahora
  }
}
