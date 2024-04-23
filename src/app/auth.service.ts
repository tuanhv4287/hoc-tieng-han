import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private loggedUser?: string;
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  private http = inject(HttpClient);
  constructor() {}
  login(user: { username: string; password: string }): Observable<any> {
    return this.http
      .post('/api/login', user)
      .pipe(tap((tokens) => this.doLoginUser(user.username, tokens)));
  }
  private doLoginUser(username: string, tokens: any) {
    this.loggedUser = username;
    this.storeJwtToken(tokens.jwt);
    this.isAuthenticatedSubject.next(true);
  }
}
