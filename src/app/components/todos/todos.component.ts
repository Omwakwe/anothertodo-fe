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
