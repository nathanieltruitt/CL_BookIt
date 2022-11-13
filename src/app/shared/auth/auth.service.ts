import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { AuthResponseData } from './auth-response.interface';
import { BehaviorSubject } from 'rxjs';
import { User } from './user.model';

const signUpUri = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebase.apiKey}`;
const signInUri = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebase.apiKey}`;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser = new BehaviorSubject<User>(null);
  constructor(private http: HttpClient) {}

  signUp(email: string, password: string) {
    return this.http.post<AuthResponseData>(signUpUri, {
      email: email,
      password: password,
      returnSecureToken: true,
    });
  }

  signIn(email: string, password: string) {
    return this.http.post<AuthResponseData>(signInUri, {
      email,
      password,
      returnSecureToken: true,
    });
  }

  handleAuth(email: string, userId: string, token: string, expiresIn: number) {
    const expDate = new Date(new Date().getTime() + expiresIn * 1000);
    const formUser = new User(email, userId, token, expDate);
    this.currentUser.next(formUser);

    localStorage.setItem('userData', JSON.stringify(formUser));
  }
}
