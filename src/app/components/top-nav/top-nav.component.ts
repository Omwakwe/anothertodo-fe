import { Component, OnInit } from '@angular/core';
import { LogoutService } from 'src/app/http/logout/logout.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css'],
})
export class TopNavComponent implements OnInit {
  showLogout: boolean = true;
  loggedin: boolean = false;

  constructor(public logoutService: LogoutService) {}

  ngOnInit(): void {
    this.logoutService.currentlogoutState.subscribe((logoutData) => {
      // console.log('TopNavComponent logoutData ', logoutData);
      this.showLogout = !logoutData;
    });

    this.logoutService.currentLoggedinState.subscribe((loggedin) => {
      console.log('TopNavComponent loggedin ', loggedin);
      this.loggedin = loggedin;
    });
  }

  logout() {
    console.log('logout clicked ');
    this.logoutService.changeLogoutState(true);
  }
}
