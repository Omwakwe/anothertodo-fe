import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, shareReplay } from 'rxjs/operators';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private apiRoot = 'https://anothertodo.herokuapp.com/users/';

  constructor(private http: HttpClient) {}

  // getUsers(): User[] {
  //   return [
  //     {
  //       link: 'https://anothertodo.herokuapp.com/users/2/',
  //       username: 'starford',
  //       email: 'starford.omwakwe@moringaschool.com',
  //       is_staff: true,
  //     },
  //   ];
  // }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiRoot).pipe(
      tap((_) => console.log('fetched users')),
      catchError(this.handleError<User[]>('geUsers', []))
    );
  }
}
