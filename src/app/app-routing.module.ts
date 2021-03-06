import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { TodosComponent } from './components/todos/todos.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { AuthGuard } from './guards/auth.guard';
import { TodoResolver } from './resolvers/todo/todo.resolver';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  {
    path: 'todos',
    component: TodosComponent,
    canActivate: [AuthGuard],
    resolve: {
      resolvedTodos: TodoResolver,
    },
  },
  { path: 'user/:id', component: UserDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
