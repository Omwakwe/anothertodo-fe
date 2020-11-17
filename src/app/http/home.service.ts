import { Injectable } from '@angular/core';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor() {}

  getUsers(): User[] {
    return [
      {
        link: 'https://anothertodo.herokuapp.com/users/2/',
        username: 'starford',
        email: 'starford.omwakwe@moringaschool.com',
        is_staff: true,
      },
    ];
  }
}
