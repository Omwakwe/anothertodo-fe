import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/http/auth-service.service';
import { LogoutService } from 'src/app/http/logout/logout.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  error: any;

  constructor(
    public logoutService: LogoutService,
    private authService: AuthServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // change state to logged out when login is loaded
    this.logoutService.changeLogoutState(true);
  }

  login(username: string, password: string) {
    console.log('username, password ', username, password);

    this.authService.login(username, password).subscribe(
      (success) => {
        this.logoutService.changeLogoutState(false);
        this.router.navigate(['/todos']);
      },
      (error) => (this.error = error)
    );
  }
}
