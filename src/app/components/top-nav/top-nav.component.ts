import { Component, OnInit } from '@angular/core';
import { LogoutService } from 'src/app/http/logout/logout.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css'],
})
export class TopNavComponent implements OnInit {
  constructor(public logoutService: LogoutService) {}

  ngOnInit(): void {}

  logout() {
    console.log('logout clicked ');
    this.logoutService.changeLogoutState(true);
  }
}
