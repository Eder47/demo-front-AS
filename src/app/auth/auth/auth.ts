import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  private readonly USER = 'admin';
  private readonly PASS = '1234';

  constructor() {}

  login(username: string, password: string): Observable<boolean> {
    console.log('Usuario:', username, 'Password:', password);

    if (username === this.USER && password === this.PASS) {
      return of(true); 
    } else {
      return of(false); 
    }
  }
}
