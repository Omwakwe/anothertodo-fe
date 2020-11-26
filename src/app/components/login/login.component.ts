import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/http/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  error: any;

  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login(username: string, password: string) {
    console.log('username, password ', username, password);

    this.authService.login(username, password).subscribe(
      (success) => this.router.navigate(['/todos']),
      (error) => (this.error = error)
    );
  }
}
