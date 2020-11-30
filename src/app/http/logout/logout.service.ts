import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LogoutService {
  // private logoutState = new BehaviorSubject<boolean>(false);
  // false means logged in and true means logged out
  private logoutState = new BehaviorSubject(false);
  currentlogoutState = this.logoutState.asObservable();

  private loggedin = new BehaviorSubject(false);
  currentLoggedinState = this.loggedin.asObservable();

  constructor() {}

  getLogoutState(): Observable<boolean> {
    return this.logoutState.asObservable();
  }

  changeLogoutState(logout: boolean) {
    // add data to an observable
    // console.log('changeLogoutState ', logout);
    this.logoutState.next(logout);
    this.loggedin.next(!logout);
  }
}
