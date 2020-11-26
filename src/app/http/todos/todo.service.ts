import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Todo } from 'src/app/models/todo/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiRoot = 'https://anothertodo.herokuapp.com/api/todo/';

  constructor(private http: HttpClient) {}

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

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiRoot).pipe(
      tap((_) => {
        console.log('fetched todos');
      }),
      catchError(this.handleError<Todo[]>('geTodos', []))
    );
  }
}
