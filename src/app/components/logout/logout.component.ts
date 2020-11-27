import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthServiceService } from 'src/app/http/auth-service.service';
import { LogoutService } from 'src/app/http/logout/logout.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent implements OnInit {
  constructor(public logoutService: LogoutService, private router: Router) {}

  ngOnInit(): void {
    this.logoutService.currentlogoutState.subscribe((logoutData) => {
      console.log('logoutData ', logoutData);
    });
    this.logoutService.getLogoutState().subscribe((logoutData) => {
      console.log('logoutData ', logoutData);
    });
  }

  logout(username: string, password: string) {
    console.log('username, password ', username, password);

    // this.authService.logout();
    // this.router.navigate(['/login']);
    // (success) => this.router.navigate(['/login']),
    // (error) => (alert("logout error "+error))
  }
}
