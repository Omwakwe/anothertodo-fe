import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/http/auth-service.service';
// import { AuthServiceService } from 'src/app/http/auth-service.service';
import { LogoutService } from 'src/app/http/logout/logout.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent implements OnInit {
  constructor(
    public logoutService: LogoutService,
    private authService: AuthServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.logoutService.currentlogoutState.subscribe((logoutData) => {
    //   console.log('logoutData ', logoutData);
    //   this.authService.logout();
    //   this.router.navigate(['/login']);
    // });
    this.authService.logout();
    this.logout();
    this.router.navigate(['/login']);
  }

  logout() {
    console.log('logout clicked ');
    this.logoutService.changeLogoutState(true);
  }
}
