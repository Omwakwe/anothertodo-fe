import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  userID: number = 0;

  constructor(private activatedroute: ActivatedRoute) {
    this.activatedroute.params.subscribe((data) => {
      console.log({ data });
      this.userID = data.id;
    });
  }

  ngOnInit(): void {}
}
