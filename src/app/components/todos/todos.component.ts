import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/http/todos/todo.service';
import { Todo } from 'src/app/models/todo/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  error: any;

  addTodo(title: string, owner: number, done: any) {
    console.log('title, owner,done ', title, owner, done);

    this.todoService.createTodo(title, owner, done).subscribe(
      (success) => {
        alert('Toto create success');
      },
      (error) => ((this.error = error), alert('Toto create error'))
    );
  }

  getTodos(): void {
    this.todoService.getTodos().subscribe((data: Todo[]) => {
      this.todos = data;
      console.log('this.todos', this.todos);
    });
  }

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getTodos();
  }
}
