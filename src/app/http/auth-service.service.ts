import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import jwtDecode from 'jwt-decode';
import * as moment from 'moment';
import { JWTPayload } from '../models/jwtpayload';
import { tap, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  private apiRoot = 'https://anothertodo.herokuapp.com/api/';

  constructor(private http: HttpClient) {}

  private setSession(authResult) {
    console.log({ authResult });

    const token = authResult.access;
    // const refresh = authResult.refresh;
    const payload = <JWTPayload>jwtDecode(token);
    const expiresAt = moment.unix(payload.exp);

    if (authResult.hasOwnProperty('refresh')) {
      localStorage.setItem('token', authResult.access);
      localStorage.setItem('refresh', authResult.refresh);
      localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
    } else {
      localStorage.setItem('token', authResult.access);
      localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
    }
  }

  get token(): string {
    return localStorage.getItem('token');
  }

  get refresh(): string {
    return localStorage.getItem('refresh');
  }

  login(username: string, password: string) {
    return this.http
      .post(this.apiRoot.concat('token/'), { username, password })
      .pipe(
        tap((response) => {
          console.log({ response });
          this.setSession(response);
        }),
        shareReplay()
      );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('refresh');
    localStorage.removeItem('expires_at');
  }

  refreshToken() {
    if (
      moment().isBetween(
        this.getExpiration().subtract(1, 'days'),
        this.getExpiration()
      )
    ) {
      return this.http
        .post(this.apiRoot.concat('token/refresh/'), { refresh: this.refresh })
        .pipe(
          tap((response) => {
            console.log('refreshToken response ', response);
            this.setSession(response);
          }),
          shareReplay()
        )
        .subscribe();
    }
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);

    return moment(expiresAt);
  }

  isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }
}
