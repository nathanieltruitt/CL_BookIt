import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthResponseData } from './auth-response.interface';
import { AuthService } from './auth.service';

@Component({
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  errMsg!: string;
  login$: Observable<AuthResponseData>;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSwitchAuthMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onLoginSubmit(loginForm: NgForm) {
    if (!loginForm.valid) return;
    const { email, password } = loginForm.value;

    if (this.isLoginMode) {
      // Sign in logic
      this.login$ = this.authService.signIn(email, password);
    } else {
      this.login$ = this.authService.signUp(email, password);
    }

    this.login$.subscribe({
      next: (res) => {
        console.log('Auth Response Success: ', res);
        if (this.errMsg) this.errMsg = null;

        this.router.navigate(['bookshelf']);
      },
      error: (err) => {
        console.error('Auth Response Error: ', err);
        this.errMsg = err.error.error.message.split(':')[1];
      },
    });

    loginForm.reset();
  }
}
