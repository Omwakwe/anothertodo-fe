import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from '../../http/home.service';
import { User } from '../../models/user';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  users: User[];

  getUsers(): void {
    // this.users = this.homeService.getUsers();
    this.homeService.getUsers().subscribe((data: User[]) => {
      this.users = data;
      console.log('this.users', this.users);
    });
  }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  constructor(
    private homeService: HomeService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.getUsers();
    // this.showSuccess();
  }
}
